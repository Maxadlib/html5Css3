/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'image',
            type:'rect',
            rect:[0,6,0,0]
         },
         {
            id:'titre',
            type:'text',
            rect:[140,5,110,30],
            text:"Tomates",
            align:"auto",
            font:['Arial Black',22,"rgba(127,64,38,1)","normal","none","normal"]
         },
         {
            id:'infos',
            type:'text',
            rect:[143,42,356,57],
            text:"Donec ultricies, velit et congue sodales, justo justo iaculis elit, id pellentesque mauris lorem eget nisi. Quisque ornare consequat urna at egestas. Duis nibh nibh, tempus ut dictum eget, suscipit non mi. Donec fringilla elit nec purus luctus in convallis augue sagittis. Nullam semper massa in nisi imperdiet nec sollicitudin eros ornare. In hac habitasse platea dictumst. Nam lacinia dictum mauris ut accumsan. ",
            align:"auto",
            font:['Arial',9,"rgba(127,63,38,1)","normal","none","normal"]
         },
         {
            id:'Line',
            type:'image',
            tag:'img',
            rect:[143,35,349,1],
            fill:["rgba(0,0,0,0)",im+"Line.png"]
         }],
         symbolInstances: [
         {
            id:'image',
            symbolName:'image'
         }
         ]
      },
   states: {
      "Base State": {
         "${_titre}": [
            ["transform", "translateX", '365px'],
            ["transform", "translateY", '0']
         ],
         "${_image}": [
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.24']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '100px'],
            ["style", "width", '500px']
         ],
         "${_infos}": [
            ["transform", "translateX", '362px'],
            ["transform", "translateY", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2010,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "transform", "${_infos}", "translateX", '0px', { fromValue: '362px'}], position: 0, duration: 1400, easing: "easeInBounce" },
            { id: "eid7", tween: [ "transform", "${_titre}", "translateY", '0', { fromValue: '0'}], position: 295, duration: 0 },
            { id: "eid10", tween: [ "transform", "${_titre}", "translateY", '0', { fromValue: '0'}], position: 1750, duration: 0 },
            { id: "eid26", tween: [ "style", "${_image}", "opacity", '1', { fromValue: '0'}], position: 1295, duration: 715, easing: "easeInBack" },
            { id: "eid27", tween: [ "transform", "${_image}", "scaleY", '1', { fromValue: '0.24'}], position: 1295, duration: 715, easing: "easeInBounce" },
            { id: "eid14", tween: [ "transform", "${_titre}", "translateX", '2px', { fromValue: '365px'}], position: 295, duration: 1455, easing: "easeInElastic" },
            { id: "eid28", tween: [ "transform", "${_image}", "scaleX", '1', { fromValue: '0.24'}], position: 1295, duration: 715, easing: "easeInBounce" },
            { id: "eid2", tween: [ "transform", "${_infos}", "translateY", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_infos}", "translateY", '0', { fromValue: '0'}], position: 1400, duration: 0 }         ]
      }
   }
},
"image": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,0,133,88],
      id: 'Image',
      fill: ['rgba(0,0,0,0)','images/Image.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '133px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1343704788782");
