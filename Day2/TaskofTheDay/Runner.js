let objArr = [];
let obj = $("<div>");
objArr.push(new clsCheckbox({}));

/**Label */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: false,
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({ controlType: "checkbox", label: "<small>" }).label(
    "Yes",
    "No"
  )
);
objArr.push(
  new clsCheckbox({ controlType: "radio", label: "<small>" }).label("Yes", "No")
);

/**Default Values */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: true,
  }).label("Yes", "No")
);

/**Suppresslabel */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
  }).label("Yes", "No")
);

/**Alignment */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    position: "left",
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    position: "top",
  }).label("Yes", "No")
);

objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    position: "left",
  }).label("Yes", "No")
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    position: "top",
  }).label("Yes", "No")
);
objArr.forEach(function (x, i, arr) {
    console.log(x)
 $('body').append(x.getDesign())
});

// $("body").append(obj);
