document
  .getElementById("predictionForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    // ── Button loading state ──
    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");

    btn.disabled = true;
    btnText.style.display = "none";
    btnLoader.style.display = "inline";

    // ── Hide previous result ──
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
    resultBox.className = "";

    try {
      // ── Collect all form values ──
      const data = {
        gender: document.getElementById("gender").value, // "0" or "1"
        age: parseFloat(document.getElementById("age").value),
        debt: parseFloat(document.getElementById("debt").value),
        married: parseInt(document.getElementById("married").value),
        bank_customer: parseInt(document.getElementById("bank_customer").value),
        industry: document.getElementById("industry").value, // string
        years_employed: parseFloat(
          document.getElementById("years_employed").value,
        ),
        prior_default: parseInt(document.getElementById("prior_default").value),
        employed: parseInt(document.getElementById("employed").value),
        credit_score: parseFloat(document.getElementById("credit_score").value),
        citizen: document.getElementById("citizen").value, // string
        income: parseFloat(document.getElementById("income").value),
      };

      console.log("Sending data:", data);

      // ── Basic validation ──
      if (isNaN(data.age) || data.age < 18 || data.age > 100) {
        throw new Error("Age must be between 18 and 100.");
      }
      if (isNaN(data.income) || data.income < 0) {
        throw new Error("Income must be a positive number.");
      }
      if (isNaN(data.debt) || data.debt < 0) {
        throw new Error("Debt must be a positive number.");
      }
      if (isNaN(data.years_employed) || data.years_employed < 0) {
        throw new Error("Years Employed must be a positive number.");
      }
      if (isNaN(data.credit_score) || data.credit_score < 0) {
        throw new Error("Credit Score must be a positive number.");
      }

      // ── Send to Flask ──
      const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Result:", result);

      if (!response.ok) {
        throw new Error(result.error || "Server error occurred.");
      }

      // ── Display result ──
      const resultIcon = document.getElementById("resultIcon");
      const resultText = document.getElementById("resultText");
      const confidenceText = document.getElementById("confidenceText");

      if (result.approved) {
        resultBox.classList.add("approved");
        resultIcon.innerText = "✅";
        resultText.innerText = "APPROVED";
        confidenceText.innerText = `Confidence: ${result.confidence}% — You are likely eligible!`;
      } else {
        resultBox.classList.add("rejected");
        resultIcon.innerText = "❌";
        resultText.innerText = "NOT APPROVED";
        confidenceText.innerText = `Confidence: ${result.confidence}% — Application needs review.`;
      }

      resultBox.style.display = "block";
    } catch (error) {
      console.error("Error:", error);
      resultBox.classList.add("rejected");
      document.getElementById("resultIcon").innerText = "⚠️";
      document.getElementById("resultText").innerText = "Error";
      document.getElementById("confidenceText").innerText = error.message;
      resultBox.style.display = "block";
    } finally {
      btn.disabled = false;
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
    }
  });
