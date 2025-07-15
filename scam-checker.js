document.addEventListener('DOMContentLoaded', function () {
  const analyzeBtn = document.getElementById('analyze-btn');
  const scamText = document.getElementById('scam-text');
  const resultDiv = document.getElementById('scam-result');

  analyzeBtn.addEventListener('click', function () {
    const input = scamText.value.trim();

    if (!input) {
      resultDiv.style.color = '#FF4136';
      resultDiv.textContent = "⚠️ Please paste a job message first.";
      return;
    }

    const scamKeywords = [
      "pay a fee", "urgent", "click here", "congratulations", "you have won",
      "send your cv", "work from home", "limited time", "personal details",
      "bank account", "transfer money", "sms this number", "lottery",
      "investment opportunity", "free training", "guaranteed job", "whatsapp only"
    ];

    const lowerInput = input.toLowerCase();
    const foundKeywords = scamKeywords.filter(keyword => lowerInput.includes(keyword));

    if (foundKeywords.length > 0) {
      resultDiv.style.color = '#FF4136';
      resultDiv.innerHTML = `🚨 <strong>Possible scam detected!</strong><br>Matched keywords:<br>• ${foundKeywords.join('<br>• ')}`;
    } else {
      resultDiv.style.color = '#2ECC40';
      resultDiv.innerHTML = `✅ <strong>This message looks safe.</strong><br>But always double-check the source.`;
    }
  });
});
