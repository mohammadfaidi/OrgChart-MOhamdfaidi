var $ = go.GraphObject.make;

var myDiagram = $(go.Diagram, "diagramDiv", {
  "undoManager.isEnabled": true,
  layout: $(
    go.TreeLayout,
    {
     // treeStyle: go.TreeLayout.StyleLastParents,
      //arrangement: go.TreeLayout.ArrangementHorizontal,
      // properties for most of the tree:
      angle: 90,
      layerSpacing: 35,
      // properties for the "last parents":
      alternateAngle: 90,
      alternateLayerSpacing: 35,
      alternateAlignment: go.TreeLayout.AlignmentBus,
      alternateNodeSpacing: 20
    }
  )
});

myDiagram.nodeTemplate = $(
  go.Node,
  "Horizontal",
  
  { background: "white" },
  //$(go.Shape, "Ellipse", { strokeWidth: 2 },    ),




    //node 1 text block inside node template 
    //$("TreeExpanderButton"),
    $("TreeExpanderButton", {
      // 미리 정해진 변수만 사용 가능 하는듯
      _treeExpandedFigure: "TriangleUp",
      _treeCollapsedFigure: "TriangleDown",
      // 크기 및 위치 조정
      width: 30,
      height: 30,
      margin: new go.Margin(0, 5, 0, 0),
      alignment: go.Spot.Center
    }),
  $(
    go.TextBlock,
    {
      text: "a Text Block",
      background: "white",
      margin: 12,
      font: "bold 14px sans-serif"
    },
    new go.Binding("text", "title")
  ),

  //node 2 text block inside node template 
  $(
    go.TextBlock,
    "Default Text",
    { margin: 30, stroke: "red", font: "bold 14px sans-serif" },
    new go.Binding("text", "name")
  ),

  $(go.Picture,
    {
      name: "Picture",
      desiredSize: new go.Size(70, 70),
      margin: 1.5,
    },
    new go.Binding("source", "type")),
);

myDiagram.linkTemplate =
  new go.Link(
    // default routing is go.Link.Normal
    // default corner is 0
    { routing: go.Link.Orthogonal, corner: 5 })
    // the link path, a Shape
    .add( new go.Shape({ strokeWidth: 3, stroke: "#555" }))




myDiagram.model = new go.TreeModel([
  { name: "Omar Kamal ", title: "CEO",type:"https://www.progineer.net/wp-content/uploads/2019/06/Annotation-2019-06-26-130147-Custom.png", key: "1" },
  { name: "Hanna Bullata ", title: "Voice President of Engineers ", key: "2",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "1" },
  { name: "Saib Nashashibi", title: "Global Support Manager", key: "3",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "1" },
  { name: "Bisher Dikeidek", title: "Business Development Director ", key: "4", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",parent: "1" },
  { name: "Emad Hamadeh", title: "Senior Project Manager", key: "5",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "1" },
 


  { name: "Huda Ebeid", title: "HR Manager", key: "6",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "2" },
  { name: "Farah KHanafseh", title: "Admin Assistant", key: "7",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "6" },
  { name: "Mohammad Jaradat", title: "Clearning Employee", key: "8",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", parent: "6" },
  { name: "Rami  Saadah", title: "Clearning Employee",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "9", parent: "6" },
  { name: "Em  Waseem", title: "Clearning Employee",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "10", parent: "6" },
  { name: "Esmael Eweiwi", title: "IT Support", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "11", parent: "3" },

  { name: "Samar Qutob", title: "Data Analytics",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "12", parent: "1" },
  { name: "Omar Kamal", title: "Ceo", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "13", parent: "1" },
  { name: "Saib Nashashibi", title: "Global Suppport Manager",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "14", parent: "1" },
  { name: "Hanna Bullata", title: "VP of Enginnering ",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "14", parent: "1" },


  { name: "Razan Marzouqa", title: "Junior Post Silicon validation Engineer ",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "15", parent: "5" },
  { name: "Hammam Tawafshah", title: "Junior Design verfication Engineer ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "16", parent: "5" },
  { name: "Yara AbuHammad ", title: "Junior Design Verficiation Engineer ",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "17", parent: "5" },
  { name: "Ahmad Khateeb", title: "Design Verfication Engineer ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "18", parent: "5" },

  { name: "Rami Malki", title: "Phsyical Design Team Lead  ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "22", parent: "5" },
  { name: "Chris Lama", title: "Student intern  ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "23", parent: "5" },
  { name: "Inas Degar", title: "Design Verfication TEam Lead ",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "18", parent: "5" },
  

  { name: "Ameer Badarnih", title: "Senior Design Verfication Engineer ",type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png", key: "19", parent: "18" },
  { name: "Asma  Qaisi", title: "Design Verfication eNGIneer ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "20", parent: "18" },
  { name: "Shahd Joudeh", title: "Junior Desing Verfication  ", type:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png",key: "21", parent: "18" },
  
]);
