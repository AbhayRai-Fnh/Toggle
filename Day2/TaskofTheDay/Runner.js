let objArr = [];
let obj = $("<div>");

/**Label */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: false,
    Desc:"Do you smoke"
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    TextOne: "Yes",
    TextTwo: "No",
    Default: true,
    Desc:"Do you smoke"
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    TextOne: "Yes",
    TextTwo: "No",
    Default: true,
    id:"12",
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "checkbox",
    label: "<small>",
    Default: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc:"Do you smoke"
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: false,
    TextOne: "Yes",
    TextTwo: "No",
    id:"13",
    Desc:"Do you smoke"
  })
);

/**Suppresslabel */
objArr.push(
  new clsCheckbox({
    controlType: "switch",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
    TextOne: "Yes",
    TextTwo: "No",
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
  })
);
objArr.push(
  new clsCheckbox({
    controlType: "radio",
    label: "<small>",
    Default: true,
    SuppressLabel: true,
    TextOne: "Yes",
    TextTwo: "No",
    id:"14",
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
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
    Desc:"Do you smoke"
  })
);
console.log(objArr);
objArr.forEach(function (x, i, arr) {
  console.log(x.clear())
  console.log(x.isFilled())
  
  $("body").append(x.getDesign());
});

// $("body").append(obj);
