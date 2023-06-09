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
              "content": "　本実験の実施責任者は岐阜大学教育学部の丹羽晴香です。\n　本実験への参加者あなたの任意によるものです。"
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
              "image": "Rbottle.png"
            },
            {
              "image": "Rcontroller.png"
            },
            {
              "image": "Rliter.png"
            },
            {
              "image": "Rmatch.png"
            },
            {
              "image": "Rmouse.jpg"
            },
            {
              "image": "Rpencil.png"
            },
            {
              "image": "Rpot.png"
            },
            {
              "image": "Rracket.png"
            },
            {
              "image": "Rscissors.png"
            },
            {
              "image": "Rspoon.png"
            },
            {
              "image": "Rstick.png"
            },
            {
              "image": "Rtoothbrush.png"
            },
            {
              "image": "Lbacket.png"
            },
            {
              "image": "Lbrush.png"
            },
            {
              "image": "Lchopsticks.png"
            },
            {
              "image": "Ldryer.png"
            },
            {
              "image": "Leraser.png"
            },
            {
              "image": "Lfan.png"
            },
            {
              "image": "Lfork.png"
            },
            {
              "image": "Lkey.png"
            },
            {
              "image": "Lknife.png"
            },
            {
              "image": "Lmic.png"
            },
            {
              "image": "Lscop.png"
            },
            {
              "image": "Lumbrella.png"
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
                  "Rbottle.png": "embedded\u002F646721ec50983cd443b0ab0e1fb7a84ff7a4509475851774c07a10e60ea12d0a.png",
                  "Rcontroller.png": "embedded\u002F3a98b356ffc48b88d13a99a13ff60d1902c8d0594ef0f59eebb039a6e29acc5b.png",
                  "Rliter.png": "embedded\u002F314e88d13692fa315e04da79d270f56e5c3e804f78bca58a2a34d72e2c7221fd.png",
                  "Rmatch.png": "embedded\u002F9c3769b8dbc90a5b96148c1065b19e3a4eb1ed8dc08c89a2eaffbe645a6dd3b4.png",
                  "Rmouse.jpg": "embedded\u002F684236a43fc9bcfc1282f4d758c802f8a2a4b013dcd0062df88480a82dade51e.jpg",
                  "Rpencil.png": "embedded\u002F6ea1101276c4a431d93b5edf727c9888727401b0bbf5e00410602c7d66e0ceae.png",
                  "Rpot.png": "embedded\u002F18181dac10bdc36fe031c0f05331c7146ffd72516e4141ae60a61caf9cbc554e.png",
                  "Rracket.png": "embedded\u002F8b29bf0ea5278f269ee65af9567da11030fe573f86d06a6fa283c497a39ad3a2.png",
                  "Rscissors.png": "embedded\u002F7cf3c4571968a3b596cf66941b5e192c589891665c6f5f5f7f813e1eba4f35c7.png",
                  "Rspoon.png": "embedded\u002F6f6b2a7ec19b32066d063e8a8000997c4b7d0e7353d37743c2625d7e0a6a06ae.png",
                  "Rstick.png": "embedded\u002F493ec5387fb8111cdaf02f782b12efdcd65d45b3104622f957bd199970e32dbc.png",
                  "Rtoothbrush.png": "embedded\u002F919be20c3e174a8c4b77dc5ee63c7d8e2e192d77fedcd7717c19b4bd9b7968e4.png",
                  "Lbacket.png": "embedded\u002F1acfb5ba46026ecf8563a11217715348e704d747aeb603ee2753bad8be64590a.png",
                  "Lbrush.png": "embedded\u002Fb33b79951e7b8332e9b506119b97289a7554c2b2bc93854b8e004c78108c281a.png",
                  "Lchopsticks.png": "embedded\u002Fc200af49d9d6f22ef3b02c464b9f0fc729d5f5d473c56d79ee52f23f86c3bc4a.png",
                  "Ldryer.png": "embedded\u002F41a3a813b190f73fed15118a4463d5bbf9908b97392343b784dac18f329ed105.png",
                  "Leraser.png": "embedded\u002F749b6737494710dc25c5fb65c19148a6f04a8bfafb1455a88bb1e0ec4915fa77.png",
                  "Lfan.png": "embedded\u002F8b757119df8e660f3101ef995efc7d9c5ff3c8b5b7d90a03c6ccb6f3f2064111.png",
                  "Lfork.png": "embedded\u002Fd124c88785ea2316daa11175e4c569cea84f3855ec3654380ef4c922e3882ff2.png",
                  "Lkey.png": "embedded\u002F427fb6d12e8c2d54907f50adfa09a7728dcc11a20d491f1e268399c79bb756a7.png",
                  "Lknife.png": "embedded\u002F59db34563e31ad0e077772a2b9b3f1f9bb1b6ca944733beb770facc20362935d.png",
                  "Lmic.png": "embedded\u002Fc68edb9ec4138be4ce7fbf49a415d7bfcfd31ddeb81d78fa1780d9417cc052a7.png",
                  "Lscop.png": "embedded\u002F2267833dc6b1c07c77ce44100176bcf39a7a0b599c726a2842ba165cb4fa08f4.png",
                  "Lumbrella.png": "embedded\u002F93b8e354118f20a6b6f8c4d45e89099e3adb836820abf07abf660af65ad3ed24.png",
                  "airplane.png": "embedded\u002Fe126c60a13756e5253880b787c23f67cfc5156ad0d34edea05d315337725cfbd.png",
                  "bed.png": "embedded\u002F1fc8386016777e5f0dda871d2d547aa5f5a20a718862d9005b16f13f2d91789b.png",
                  "blackboad.png": "embedded\u002F9f0f7b7b8967bbe0289bdd98d43eaad5d2e2e6aac30e2fe22a296abb16290939.png",
                  "boat.png": "embedded\u002F26ae2a736e28ee3ca749371bef1bc6ba9745dc43873aaadcd65cd279201f8b20.png",
                  "crossing.png": "embedded\u002F80e48c436c98192fd1c97b9a26c0d9dab1f860a1e51f4f61982475a15f2483ab.png",
                  "fireplace.png": "embedded\u002Fd2b88335ddc86be918497ffb2b4ab0b1aa04e9ea8bd6347a47ef5f8d32e428f7.png",
                  "fountain.png": "embedded\u002F6f0370e2f300586e6898b4b0117c2ecdec62eb0d553bc3f73383e48c0447e899.png",
                  "stairs.png": "embedded\u002Fe685ccb68a4e98692ca24ef0459eabc1534a20a3ede573560fcf6e98611290f2.png",
                  "tent.png": "embedded\u002Fb3a8ce1f8dc3da08f3c82b5feaf670a53fc51e55a066d37369917a035e51a42c.png",
                  "tire.png": "embedded\u002Fd7c7683701424af0488cef6d94ea7ca9e06327b3a691e292d5ec57e1c8fcea74.png",
                  "windmill.png": "embedded\u002F2d03a88cf1c2bedd00fd8d0b0fc725887713a5762b6e5f4217f1e2f150513ce5.png",
                  "carpet2.png": "embedded\u002F9dd83338f4f799e8e3ca176256c0b6e37ffbc71d44893deb10bfcbbe85c4f786.png"
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
                "top": 10,
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
              "label": " 文字を書くとき，ペンをどちらの手で持ちますか？",
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