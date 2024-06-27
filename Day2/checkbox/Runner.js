let objArr = [];
let obj = $("<div>");

/**Label */
objArr.push(new clsCheckbox({}));
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    Default: true,
    Desc: "Smoking is injurous to health. We need to know if you smoke to be able to help you out.",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    Default: true,
    id: "12",
    Desc: "Do you smoke",
  })
);

/**Default Values */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    Default: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    Default: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
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
    SuppressLabel: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc: "Do you smoke",
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
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
    TextOne: "Yes",
    TextTwo: "No",
    id: "16",
    Desc: "Do you smoke",
  })
);

/**Alignment */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
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
