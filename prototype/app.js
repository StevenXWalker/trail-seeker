const advancedToggle = document.getElementById("advancedToggle");
const advancedPanel = document.getElementById("advancedPanel");

if (advancedToggle && advancedPanel) {
  advancedToggle.addEventListener("click", () => {
    const isHidden = advancedPanel.hasAttribute("hidden");
    if (isHidden) {
      advancedPanel.removeAttribute("hidden");
      advancedToggle.textContent = "Hide Advanced Filters";
    } else {
      advancedPanel.setAttribute("hidden", "");
      advancedToggle.textContent = "Advanced Filters";
    }
  });
}

const unavailableToggle = document.getElementById("unavailableToggle");
const unavailableList = document.getElementById("unavailableList");

if (unavailableToggle && unavailableList) {
  const rows = [...unavailableList.querySelectorAll(".unavailable-row")];
  const maxVisible = 3;
  const setCollapsed = (collapsed) => {
    rows.forEach((row, idx) => {
      row.hidden = collapsed && idx >= maxVisible;
    });
    unavailableToggle.textContent = collapsed ? "Expand ▾" : "Collapse ▴";
  };
  setCollapsed(true);
  unavailableToggle.addEventListener("click", () => {
    const isCollapsed = rows.some((row, idx) => row.hidden && idx >= maxVisible);
    setCollapsed(!isCollapsed);
  });
}

const scoreButtons = document.querySelectorAll(".score");
const scoreTooltip = document.getElementById("scoreTooltip");

if (scoreTooltip) {
  scoreButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
      scoreTooltip.textContent = btn.dataset.score || "";
      scoreTooltip.classList.add("show");
    });
    btn.addEventListener("mousemove", (e) => {
      scoreTooltip.style.left = `${e.clientX + 12}px`;
      scoreTooltip.style.top = `${e.clientY + 12}px`;
    });
    btn.addEventListener("mouseleave", () => {
      scoreTooltip.classList.remove("show");
    });
  });
}

const mapMarkers = document.querySelectorAll(".marker");
const mapTooltip = document.getElementById("mapTooltip");

if (mapTooltip) {
  mapMarkers.forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      mapTooltip.textContent = marker.dataset.tooltip || "";
      mapTooltip.classList.add("show");
    });
    marker.addEventListener("mousemove", (e) => {
      mapTooltip.style.left = `${e.clientX + 12}px`;
      mapTooltip.style.top = `${e.clientY + 12}px`;
    });
    marker.addEventListener("mouseleave", () => {
      mapTooltip.classList.remove("show");
    });
    marker.addEventListener("click", () => {
      const link = marker.dataset.link;
      if (link) window.location.href = link;
    });
  });
}
