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
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Full Screen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実行されます。",
          "hint": "準備が出来たらクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "本実験について",
              "content": "　本実験の実施責任者は岐阜大学教育学部の丹羽晴香です。\n本実験への参加者あなたの任意によるものです。"
            },
            {
              "required": true,
              "type": "text",
              "title": "1．本実験の目的",
              "content": "　物体の画像記憶について調べることが本実験の目的です。"
            },
            {
              "required": true,
              "type": "text",
              "title": "2．本実験の手続き",
              "content": "　もし，あなたが本実験に参加した場合，あなたには物体を記憶していただきます。\n\u003Cbr\u003E　この実験・調査の所要時間は約10分程度です。"
            },
            {
              "required": true,
              "type": "text",
              "title": "3．潜在的なリスク・苦痛など",
              "content": "　手が押さえつけられる場面がございますが，痛みが無いよう，確認を取りながら行います。\n\u003Cbr\u003E　いつ，いかなる理由でも，自由に実験を中止していただけます（6．参加と中止も参照ください）。"
            },
            {
              "required": true,
              "type": "text",
              "title": "4．参加による利益",
              "content": "　あなたが本実験に参加することで学習，認知についての研究の発展につながります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "5．匿名性の確保",
              "content": "　本実験によって得られた情報は法律による開示請求を除き，匿名性が維持されます。\n\u003Cbr\u003E　匿名性は実験参加者番号の付与，統計的解析によって保たれます。\n\u003Cbr\u003E　収集されたデータは，個人が特定できるデータが公表されることは決してありません。\n\u003Cbr\u003E　統計的に処理されたデータを学会発表や論文として公表する場合があります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "6．参加と中止",
              "content": "　あなたは本実験への参加もしくは不参加を自由に選択できます。\n\u003Cbr\u003E　また，参加した場合でも，いつでも，どのような理由でも，途中で実験を中止することができます。\n\u003Cbr\u003E　もし，途中で実験を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで中止できます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "7．録音データの扱い",
              "content": "　本実験は録音をする場面がございますが，研究終了後にはデータを破棄します。"
            },
            {
              "required": true,
              "type": "text",
              "title": "8．実験実施者への問い合わせ",
              "content": "　本実験に対して質問がある場合は，実施責任者にお問い合わせください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "実験への参加に同意いただけますか？同意いただける方は書面に署名をお願いいたします。",
              "options": [
                {
                  "label": "署名を記入した。",
                  "coding": "informedConsent"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "informedConsent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "手の拘束を行います。",
              "content": "この画面が提示されたら，実験者をお呼びください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "HandConstraint"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cb\u003E覚え方は自由です。\u003Cb\u003E声を出しても問題ありません。\u003C\u002Fb\u003E",
              "title": "物体の画像が提示されます。可能な限り覚えてください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "指示が理解出来たらチェックを入れ，「次へ」を押してください。",
              "options": [
                {
                  "label": "指示が理解できた"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Learning inst"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "countdown": "5"
            },
            {
              "countdown": "4"
            },
            {
              "countdown": "3"
            },
            {
              "countdown": "2"
            },
            {
              "countdown": "1"
            },
            {
              "countdown": "start!"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Countdown",
          "shuffleGroups": [],
          "template": {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 760.4,
                "height": 56.5,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.countdown}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "50",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
              "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
            },
            "title": "number",
            "timeout": "1000"
          }
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
          "messageHandlers": {
            "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
            "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
          },
          "title": "Blank",
          "timeout": "500"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "image": "Lbottle.png"
            },
            {
              "image": "Lcontroller.png"
            },
            {
              "image": "Llighter.png"
            },
            {
              "image": "Lmatch.png"
            },
            {
              "image": "Lmouse.jpg"
            },
            {
              "image": "Lpencil.png"
            },
            {
              "image": "Lpot.png"
            },
            {
              "image": "Lracket.png"
            },
            {
              "image": "Lscissors.png"
            },
            {
              "image": "Lspoon.png"
            },
            {
              "image": "Lstick.png"
            },
            {
              "image": "Ltoothbrush.png"
            },
            {
              "image": "Rbacket.png"
            },
            {
              "image": "Rbrush.png"
            },
            {
              "image": "Rchopsticks.png"
            },
            {
              "image": "Rdryer.png"
            },
            {
              "image": "Reraser.png"
            },
            {
              "image": "Rfan.png"
            },
            {
              "image": "Rfork.png"
            },
            {
              "image": "Rkey.png"
            },
            {
              "image": "Rknife.png"
            },
            {
              "image": "Rmic.png"
            },
            {
              "image": "Rscop.png"
            },
            {
              "image": "Rumbrella.png"
            },
            {
              "image": "airplane.png"
            },
            {
              "image": "bed.png"
            },
            {
              "image": "blackboad.png"
            },
            {
              "image": "boat.png"
            },
            {
              "image": "carpet2.png"
            },
            {
              "image": "crossing.png"
            },
            {
              "image": "fireplace.png"
            },
            {
              "image": "fountain.png"
            },
            {
              "image": "stairs.png"
            },
            {
              "image": "tent.png"
            },
            {
              "image": "tire.png"
            },
            {
              "image": "windmill.png"
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
          "messageHandlers": {
            "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
            "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
          },
          "title": "LearningStage",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
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
                  "Lbottle.png": "embedded\u002Fee799b9d9b4ce27e4d07be81323eed91c5bc824f1a501525cdd9b78544590f27.png",
                  "Lcontroller.png": "embedded\u002F1399c8bbd6adba3dfba3293e6cc415356c4e5cb27ecc27d95013c8661638e9c5.png",
                  "Llighter.png": "embedded\u002F463571b5ff1d2749fa948887fca16e180c9603bb98b890cc3054b94c142b418e.png",
                  "Lmatch.png": "embedded\u002F0efdb65b2c41ca3ba110c004937d7276f2afdb6d50c9ed3ea6ad81d372ca54c2.png",
                  "Lmouse.jpg": "embedded\u002Fb252e91a6287adc012b7a65178770192b283e2a1c115f7dcca4119e9d83dc46f.jpg",
                  "Lpencil.png": "embedded\u002Fe39f23408cacfdbe7d6dd1d934d6542a47ceb65b3a039938b21c657ab6ca8e45.png",
                  "Lpot.png": "embedded\u002Fdf9aafbd916be7ea975d371f5735b8cb11d296c0b7e1640d3c52f59b875f19d1.png",
                  "Lracket.png": "embedded\u002Ffb0f80774b70c62e25ee03c2f061438a694caaca35b6db2ea0dab9d7e90438e6.png",
                  "Lscissors.png": "embedded\u002F7551c0aaf8456d794ce0dd65dba242425cfda640ac30ec3c74a3dcc88b8e8302.png",
                  "Lspoon.png": "embedded\u002F55604626f72d702cbd2060c9c9844b0fdaf4665c043f80570cbeb683c3c22cfd.png",
                  "Lstick.png": "embedded\u002Fed49d3a1253db19af1b44a50f52cc332763334fa4f71f6ca94a1c464b5986f86.png",
                  "Ltoothbrush.png": "embedded\u002Fa01b561cceadec1a8a1f900e3e66d62a4163a68d18759ac4c8863e8de7f55ccb.png",
                  "Rbacket.png": "embedded\u002Fa23f5fabaf0dfccc03c6a5f350a8b13edcefebe318ea320a236b0f1bc01f85f8.png",
                  "Rbrush.png": "embedded\u002Fdbf7521b1111f4c77fd38e8d74e22e7a7af2e344d0c7949ee9cd4c9e07f9e1ff.png",
                  "Rchopsticks.png": "embedded\u002F1aa02150901fca12c74de8c5f290a6355e66d7b0e881398a4a5441c76e1b684c.png",
                  "Rdryer.png": "embedded\u002F8afe6959e4c299eac6473f161eb287ffb943336a6eef7e28e98d8ef1ce000dca.png",
                  "Reraser.png": "embedded\u002Fffa9c265c7a06118a62b03f4542893ce4f2f09c58c4e5ea77f0a4b97776255c8.png",
                  "Rfan.png": "embedded\u002F80c1915db29655eb8e3664e2bde723d843ae40cf34792ef95906c7fb57829ab5.png",
                  "Rfork.png": "embedded\u002Fa828aafa4b561dff6ebbd9d9c44939c8d453f219689314ce9e9244400a955c55.png",
                  "Rkey.png": "embedded\u002Ffdbf4caaec9930c1d7b8241faeb491e73d23c306dcbed2ff1545190f56bb7560.png",
                  "Rknife.png": "embedded\u002F7efc878387e264fb54b598454ce195904f26a5cf472939e4930ba222b8a7b56a.png",
                  "Rmic.png": "embedded\u002F64395fd591e4df43c400318eb3cb9d4203be16530eabb68b51eba2b8b82a5cab.png",
                  "Rscop.png": "embedded\u002Fa059010bb1099b2ca3f55887d12157415532599c21afec58f06dd62bdc4414d2.png",
                  "Rumbrella.png": "embedded\u002Fb23b0bf2d626bfafb801ec9fc024f2ca1b6c91af78af1f2e15e619bca15cb06e.png",
                  "airplane.png": "embedded\u002Fe126c60a13756e5253880b787c23f67cfc5156ad0d34edea05d315337725cfbd.png",
                  "bed.png": "embedded\u002F1fc8386016777e5f0dda871d2d547aa5f5a20a718862d9005b16f13f2d91789b.png",
                  "blackboad.png": "embedded\u002F9f0f7b7b8967bbe0289bdd98d43eaad5d2e2e6aac30e2fe22a296abb16290939.png",
                  "boat.png": "embedded\u002F26ae2a736e28ee3ca749371bef1bc6ba9745dc43873aaadcd65cd279201f8b20.png",
                  "carpet2.png": "embedded\u002F9dd83338f4f799e8e3ca176256c0b6e37ffbc71d44893deb10bfcbbe85c4f786.png",
                  "crossing.png": "embedded\u002F80e48c436c98192fd1c97b9a26c0d9dab1f860a1e51f4f61982475a15f2483ab.png",
                  "fireplace.png": "embedded\u002Fd2b88335ddc86be918497ffb2b4ab0b1aa04e9ea8bd6347a47ef5f8d32e428f7.png",
                  "fountain.png": "embedded\u002F6f0370e2f300586e6898b4b0117c2ecdec62eb0d553bc3f73383e48c0447e899.png",
                  "stairs.png": "embedded\u002Fe685ccb68a4e98692ca24ef0459eabc1534a20a3ede573560fcf6e98611290f2.png",
                  "tent.png": "embedded\u002Fb3a8ce1f8dc3da08f3c82b5feaf670a53fc51e55a066d37369917a035e51a42c.png",
                  "tire.png": "embedded\u002Fd7c7683701424af0488cef6d94ea7ca9e06327b3a691e292d5ec57e1c8fcea74.png",
                  "windmill.png": "embedded\u002F2d03a88cf1c2bedd00fd8d0b0fc725887713a5762b6e5f4217f1e2f150513ce5.png"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Stimulus",
                "timeout": "1500"
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
                "timeout": "750"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "手の拘束を外します。",
              "content": "この画面が提示されたら実験者を呼んでください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "options": [
                {
                  "label": "手の拘束を外した。"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "removeConstraint"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "これから，課題を行っていただきます。",
              "content": "これから，アルファベットの大文字と小文字のペアが画面に提示されます。それぞれが同じ文字を表していたら\u003Cb\u003E「同じ」\u003C\u002Fb\u003Eと，違う文字を表していたら\u003Cb\u003E「違う」\u003C\u002Fb\u003Eと口頭で答えてください。\nこの際，両手は机の上に置いたままにしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Prevent_STM inst"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "countdown": "5"
            },
            {
              "countdown": "4"
            },
            {
              "countdown": "3"
            },
            {
              "countdown": "2"
            },
            {
              "countdown": "1"
            },
            {
              "countdown": "start!"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Countdown",
          "shuffleGroups": [],
          "template": {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 760.4,
                "height": 56.5,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.countdown}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "50",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
              "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
            },
            "title": "number",
            "timeout": "1000"
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 2,
              "height": 90.4,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "80",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
            "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
          },
          "title": "Blank",
          "timeout": "500"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "alphabet": "K n"
            },
            {
              "alphabet": "Y r"
            },
            {
              "alphabet": "E e"
            },
            {
              "alphabet": "H k"
            },
            {
              "alphabet": "Q q"
            },
            {
              "alphabet": "G d"
            },
            {
              "alphabet": "L v"
            },
            {
              "alphabet": "B d"
            },
            {
              "alphabet": "P b"
            },
            {
              "alphabet": "F f"
            },
            {
              "alphabet": "O c"
            },
            {
              "alphabet": "T x"
            },
            {
              "alphabet": "J y"
            },
            {
              "alphabet": "N n"
            },
            {
              "alphabet": "C i"
            },
            {
              "alphabet": "G s"
            },
            {
              "alphabet": "R r"
            },
            {
              "alphabet": "A q"
            },
            {
              "alphabet": "L t"
            },
            {
              "alphabet": "G g"
            },
            {
              "alphabet": "D b"
            },
            {
              "alphabet": "M m"
            },
            {
              "alphabet": "U i"
            },
            {
              "alphabet": "Z j"
            },
            {
              "alphabet": "W w"
            },
            {
              "alphabet": "S z"
            },
            {
              "alphabet": "I u"
            },
            {
              "alphabet": "B p"
            },
            {
              "alphabet": "X v"
            },
            {
              "alphabet": "V c"
            },
            {
              "alphabet": "S s"
            },
            {
              "alphabet": "T h"
            },
            {
              "alphabet": "E a"
            },
            {
              "alphabet": "Q o"
            },
            {
              "alphabet": "U w"
            },
            {
              "alphabet": "J j"
            },
            {
              "alphabet": "H z"
            },
            {
              "alphabet": "A u"
            },
            {
              "alphabet": "K e"
            },
            {
              "alphabet": "Y v"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
            "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
          },
          "title": "Prevent_STM",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 842.64,
                    "height": 67.8,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.alphabet}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "60",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
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
                "title": "Alphabet",
                "timeout": "1500"
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
                "timeout": "750"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "",
              "title": "この画面が提示されたら実験者を呼んでください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Call"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "これから，課題を行っていただきます。",
              "content": "最初に覚えた物体の名前を，順序関係なくできるだけたくさん思い出して口頭で答えてください。\n時間制限はありません。\n\u003Cbr\u003Eこれ以上思い出せないと思ったら教えて下さい。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "　",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Recall  inst"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "フランダース利き手テスト",
              "content": "これからさまざまな場面で，左右どちらの手をあなたが使うか質問します。下に示した10項目のそれぞれについて，選択肢「左」，「どちらも」，「右」の一つを選び，回答してください。\n\u003Cbr\u003E「どちらも」の選択肢は，左右の手を全く同じくらい使う場合のみ選択してください。\n\u003Cbr\u003Eすべての項目に回答してください。\n\u003Cbr\u003E10項目のなかには，あなたにとってほとんど経験がないことがあるかもしれません。\nたとえ経験がなくとも，その場面や課題を想像し回答してください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 文字を書くとき，ペンをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question1"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 食事の時，スプーンをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question2"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 歯を磨くとき，歯ブラシをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question3"
            },
            {
              "required": true,
              "type": "radio",
              "label": " ボールを投げるとき，ボールをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question4"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 消しゴムで文字を消すとき，消しゴムをどちらの手で持って消しますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question5"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 縫いものをするとき，針をどちらの手で持って使いますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question6"
            },
            {
              "required": true,
              "type": "radio",
              "label": " パンにバターをぬるとき，ナイフをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question7"
            },
            {
              "required": true,
              "type": "radio",
              "label": " クギを打つとき，カナヅチをどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question8"
            },
            {
              "required": true,
              "type": "radio",
              "label": " ニンジンの皮をむくとき，皮むき器をどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "question9"
            },
            {
              "required": true,
              "type": "radio",
              "label": " 絵を描くとき，ペンや筆をどちらの手で持ちますか？",
              "options": [
                {
                  "label": "左",
                  "coding": "1"
                },
                {
                  "label": "どちらも",
                  "coding": "2"
                },
                {
                  "label": "右",
                  "coding": "3"
                }
              ],
              "name": "questionten"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "DominantHandTest"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "",
              "title": "これで実験を終了いたします。ご協力ありがとうございました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "実験の結果をダウンロードする。",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "End"
        }
      ]
    }
  ]
})

// Let's go!
study.run()