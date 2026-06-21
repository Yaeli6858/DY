const cron = require("node-cron");
const Donor = require("../models/DonorModel");

cron.schedule("24 12 * * *", async () => {
  console.log("📅 בודק הוראות קבע...");
  try {
    const donors = await Donor.find({ "donations.isActive": true });

    for (const donor of donors) {
      let updated = false;

      donor.donations.forEach(d => {
        const now = new Date();
        if (d.frequency !== "monthly") return;
        while (
          d.isActive &&
          !(d.endDate && d.endDate < now) &&
          !(d.stoppedAt != null) &&
          d.nextDonationDate &&
          d.nextDonationDate <= now
        ) {
          // הוספת תרומה חודשית
          // const index = donor.donations.length + 1;

          donor.donations.push({
            date: now,
            amount: d.amount,
            paymentMethod: d.paymentMethod,


            frequency: "once",

            // שדות שמבטיחים שלא יחשבו את זה כקבע 
            isActive: false,
            nextDonationDate: null,
            endDate: null,
            stoppedAt: null
          });

          updated = true;

          // עדכון ההוראת קבע
          const next = new Date(d.nextDonationDate);
          next.setMonth(next.getMonth() + 1);
          d.nextDonationDate = next;

          if (d.endDate && d.nextDonationDate > d.endDate) {
            d.isActive = false;
            d.stoppedAt = now;
            break;
          }
        }
      });

      if (updated) await donor.save();
    }

    console.log("✅ סיום עדכון הוראות קבע");
  } catch (error) {
    console.error("❌ שגיאה ב-cron:", error);
  }
});
