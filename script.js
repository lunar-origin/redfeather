// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image": "スプーン.png"
        },
        {
          "image": "つえ左.png"
        },
        {
          "image": "ハサミ左.png"
        },
        {
          "image": "ビン左.png"
        },
        {
          "image": "うちわ.png"
        },
        {
          "image": "くし右.png"
        },
        {
          "image": "マイク右.png"
        },
        {
          "image": "鍵.png"
        },
        {
          "image": "タイヤ.png"
        },
        {
          "image": "テント.png"
        },
        {
          "image": "暖炉.png"
        },
        {
          "image": "風車.png"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Learning Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 300,
                "height": 300,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "スプーン.png": "embedded\u002F55604626f72d702cbd2060c9c9844b0fdaf4665c043f80570cbeb683c3c22cfd.png",
              "つえ左.png": "embedded\u002Fed49d3a1253db19af1b44a50f52cc332763334fa4f71f6ca94a1c464b5986f86.png",
              "ハサミ左.png": "embedded\u002F768b820f64864893230b136aa3acd84dff36b099fa6cbdaad0e6e2ae9a10db80.png",
              "ビン左.png": "embedded\u002F4d91dcde048efa9d7428368088a24a988fb3adee57f0dd0e8f406d8faf802e16.png",
              "うちわ.png": "embedded\u002F80c1915db29655eb8e3664e2bde723d843ae40cf34792ef95906c7fb57829ab5.png",
              "くし右.png": "embedded\u002Ffe0f2e04cab3942e8b38eca9c6bd6e2887932051c3a20c29eb22c0e4f5361406.png",
              "マイク右.png": "embedded\u002F64395fd591e4df43c400318eb3cb9d4203be16530eabb68b51eba2b8b82a5cab.png",
              "鍵.png": "embedded\u002Fe155c8b5f4f5270b003144897a7dd299d62e7d9ff9723d4bef231f77d02d847e.png",
              "タイヤ.png": "embedded\u002Fd7c7683701424af0488cef6d94ea7ca9e06327b3a691e292d5ec57e1c8fcea74.png",
              "テント.png": "embedded\u002F6714c746c7ab13224e20c85b264666728e493c35f82a198537814895064bb7b9.png",
              "暖炉.png": "embedded\u002F6789f4d198f4819156c71b01d1defa93b99ed6740546c2def8317d97af2fab64.png",
              "風車.png": "embedded\u002F2d03a88cf1c2bedd00fd8d0b0fc725887713a5762b6e5f4217f1e2f150513ce5.png",
              "箸.png": "embedded\u002F1aa02150901fca12c74de8c5f290a6355e66d7b0e881398a4a5441c76e1b684c.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Stimulus",
            "timeout": "1000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()