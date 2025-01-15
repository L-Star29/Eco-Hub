window.addEventListener("scroll", function () {
  const banner = document.querySelector(".banner");
  if (window.scrollY > 100) {
    banner.classList.add("scrolled");
  } else {
    banner.classList.remove("scrolled");
  }
});

function showFullMenu() {
  const banner = document.querySelector(".banner");
  const links = document.querySelector(".link-group");
  if (window.innerWidth < 600) {
    if (!banner.classList.contains("full")) {
      banner.classList.add("full");
      links.classList.add("full");
    } else {
      banner.classList.remove("full");
      links.classList.remove("full");
    }
  } else {
    if (banner.classList.contains("full")) {
      banner.classList.remove("full");
      links.classList.remove("full");
    }
  }
}

function updatePowerConsumption() {
  const applianceDropdown = document.getElementById("appliance");
  const selectedValue = applianceDropdown.value;

  if (selectedValue) {
    document.getElementById("watts").value = selectedValue;

    wattsInput.focus();
  }
}

function resetFields() {
  document.getElementById("calculator-form").reset();
}

function calculateConsumption() {
  const watts = document.getElementById("watts").value;
  const hours = document.getElementById("hours").value;
  const days = document.getElementById("days").value;
  const rate = document.getElementById("rate").value;

  if (watts && hours && days && rate) {
    const kWh = (watts / 1000) * hours * days;
    const cost = kWh * rate;
    const coal = 1.14 * kWh;

    document.getElementById("total").innerHTML = `${kWh.toFixed(2)} kWh
      `;

    document.getElementById("cost").innerHTML = `$${cost.toFixed(2)}
      `;

    document.getElementById("coals").innerHTML = `${coal.toFixed(2)} lbs
      `;
  } else {
    alert("Please fill in all fields.");
  }
}

