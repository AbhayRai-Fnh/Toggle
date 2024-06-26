let objArr = [];
let obj = $("<div>");

/**Label */
objArr.push(
  new clsCheckbox({
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    Desc: "Do you smoke ?",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: true,
    Desc: "Do you smoke",
  })
);

/**Default Values */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: false,
    TextOne: "Yes",
    TextTwo: "No",
    id: "13",
    Desc: "Do you smoke",
  })
);

/**Suppresslabel */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    SuppressLabel: true,
    TextOne:"Yes",
    TextTwo:"No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    TextOne: "Yes",
    TextTwo: "No",
    id:"12",
    Desc: "Do you smoke",
  })
);

/**Alignment */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    position: "left",
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    position: "top",
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);

objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    position: "left",
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    position: "top",
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.forEach(function (x, i, arr) {
  $("body").append(x.getDesign());
});

