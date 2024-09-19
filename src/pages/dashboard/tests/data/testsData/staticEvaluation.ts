import SectionNames from "../../../../../types/SectionNames";
import Back_P from "../AIformulas/staticEvaluation/Back_P";
import Front_P from "../AIformulas/staticEvaluation/Front_P";
import Side_P from "../AIformulas/staticEvaluation/Side_P";

const staticEvaluation = [
   {
      name: "front" as SectionNames,
      nameFA: 'نمای قدامی',
      questions: [
         {
            id: 1,
            title: 'گردن کج',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 2,
            title: 'شانه نابرابر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 3,
            title: 'انحراف جانبی لگن',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 4,
            title: 'زانو پرانتزی',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 5,
            title: 'زانو ضربدری',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 6,
            title: 'چرخش خارجی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 7,
            title: 'چرخش داخلی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 8,
            title: 'سینه فرو رفته',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 9,
            title: 'سینه کبوتری',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 10,
            title: 'بدشکلی انگشتان دست',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 11,
            title: 'بدشکلی انگشتان پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 12,
            title: 'کف پای صاف',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 13,
            title: 'کف پای گود',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "/images/sampleImages/front.png",
         sampleImageLandmarks: [
            {
               "x": 0.39666038751602173,
               "y": 0.20890307426452637,
               "z": -0.928112804889679,
               "visibility": 0.9999772310256958
            },
            {
               "x": 0.4152195453643799,
               "y": 0.1446685791015625,
               "z": -0.809050440788269,
               "visibility": 0.9999586343765259
            },
            {
               "x": 0.42956918478012085,
               "y": 0.1524902582168579,
               "z": -0.8076159358024597,
               "visibility": 0.9999576807022095
            },
            {
               "x": 0.4437505006790161,
               "y": 0.1605362892150879,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.36743417382240295,
               "y": 0.12707090377807617,
               "z": -0.8850782513618469,
               "visibility": 0.9999654293060303
            },
            {
               "x": 0.34779834747314453,
               "y": 0.12230777740478516,
               "z": -0.8850782513618469,
               "visibility": 0.9999690055847168
            },
            {
               "x": 0.3260599970817566,
               "y": 0.11778855323791504,
               "z": -0.8843609690666199,
               "visibility": 0.9999603033065796
            },
            {
               "x": 0.4449217915534973,
               "y": 0.20957458019256592,
               "z": -0.23884201049804688,
               "visibility": 0.9999334812164307
            },
            {
               "x": 0.2788313031196594,
               "y": 0.1511385440826416,
               "z": -0.5953119397163391,
               "visibility": 0.9999743700027466
            },
            {
               "x": 0.4106123447418213,
               "y": 0.30965328216552734,
               "z": -0.7215467691421509,
               "visibility": 0.9999860525131226
            },
            {
               "x": 0.3517710268497467,
               "y": 0.2891625165939331,
               "z": -0.8255470395088196,
               "visibility": 0.9999895095825195
            },
            {
               "x": 0.49837708473205566,
               "y": 0.7252806425094604,
               "z": 0.07844848185777664,
               "visibility": 0.9997658133506775
            },
            {
               "x": 0.06897494196891785,
               "y": 0.5859518051147461,
               "z": -0.5268151760101318,
               "visibility": 0.9999001026153564
            },
            {
               "x": 0.5533068180084229,
               "y": 1.2540740966796875,
               "z": 0.08745885640382767,
               "visibility": 0.19238758087158203
            },
            {
               "x": -0.118104949593544,
               "y": 1.086801528930664,
               "z": -0.8692988753318787,
               "visibility": 0.6057990193367004
            },
            {
               "x": 0.5851940512657166,
               "y": 1.6800810098648071,
               "z": -0.5852705240249634,
               "visibility": 0.05823862552642822
            },
            {
               "x": -0.05090571939945221,
               "y": 1.5689830780029297,
               "z": -1.4646108150482178,
               "visibility": 0.18169839680194855
            },
            {
               "x": 0.6255064010620117,
               "y": 1.8355827331542969,
               "z": -0.7043328881263733,
               "visibility": 0.06313489377498627
            },
            {
               "x": -0.07886047661304474,
               "y": 1.744552731513977,
               "z": -1.6553975343704224,
               "visibility": 0.17370831966400146
            },
            {
               "x": 0.5744656324386597,
               "y": 1.8561089038848877,
               "z": -0.809050440788269,
               "visibility": 0.11899801343679428
            },
            {
               "x": 0.005761876702308655,
               "y": 1.7685441970825195,
               "z": -1.6855217218399048,
               "visibility": 0.27386561036109924
            },
            {
               "x": 0.5522927045822144,
               "y": 1.7942633628845215,
               "z": -0.6641672849655151,
               "visibility": 0.11476478725671768
            },
            {
               "x": 0.018924802541732788,
               "y": 1.7030994892120361,
               "z": -1.5047764778137207,
               "visibility": 0.2483518421649933
            },
            {
               "x": 0.3902798295021057,
               "y": 1.7055717706680298,
               "z": 0.2182212769985199,
               "visibility": 0.0005357805639505386
            },
            {
               "x": 0.09481163322925568,
               "y": 1.671097755432129,
               "z": -0.20764192938804626,
               "visibility": 0.0006000071880407631
            },
            {
               "x": 0.39002954959869385,
               "y": 2.540114402770996,
               "z": 0.06621052324771881,
               "visibility": 0.00748962489888072
            },
            {
               "x": 0.10777202248573303,
               "y": 2.4585928916931152,
               "z": -0.28313177824020386,
               "visibility": 0.006718870252370834
            },
            {
               "x": 0.3645751476287842,
               "y": 3.317126750946045,
               "z": 0.9001403450965881,
               "visibility": 0.005888159852474928
            },
            {
               "x": 0.09579083323478699,
               "y": 3.220769166946411,
               "z": 0.2612558603286743,
               "visibility": 0.005405900068581104
            },
            {
               "x": 0.3535842001438141,
               "y": 3.4609432220458984,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.07898814976215363,
               "y": 3.366342067718506,
               "z": 0.3033939003944397,
               "visibility": 0.0060269515961408615
            },
            {
               "x": 0.36514806747436523,
               "y": 3.5378923416137695,
               "z": 0.66165691614151,
               "visibility": 0.003311519045382738
            },
            {
               "x": 0.17760884761810303,
               "y": 3.4399209022521973,
               "z": -0.1374417394399643,
               "visibility": 0.0027362213004380465
            },
            {
               "x": 0.38490524888038635,
               "y": 0.13916242122650146,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.21628617495298386,
               "y": 3.413642644882202,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.28367601335048676,
               "y": 0.6479247331619262,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            }
         ],
         photoFn: Front_P,
      },
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: "back" as SectionNames,
      nameFA: 'نمای خلفی',
      questions: [
         {
            id: 14,
            title: 'انحراف جانبی ستون فقرات',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 15,
            title: 'کتف بالدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 16,
            title: 'چرخش مچ پا به داخل',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 17,
            title: 'چرخش مچ پا به خارج',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "/images/sampleImages/back.png",
         sampleImageLandmarks: [
            {
               "x": 0.39666038751602173,
               "y": 0.20890307426452637,
               "z": -0.928112804889679,
               "visibility": 0.9999772310256958
            },
            {
               "x": 0.4152195453643799,
               "y": 0.1446685791015625,
               "z": -0.809050440788269,
               "visibility": 0.9999586343765259
            },
            {
               "x": 0.42956918478012085,
               "y": 0.1524902582168579,
               "z": -0.8076159358024597,
               "visibility": 0.9999576807022095
            },
            {
               "x": 0.4437505006790161,
               "y": 0.1605362892150879,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.36743417382240295,
               "y": 0.12707090377807617,
               "z": -0.8850782513618469,
               "visibility": 0.9999654293060303
            },
            {
               "x": 0.34779834747314453,
               "y": 0.12230777740478516,
               "z": -0.8850782513618469,
               "visibility": 0.9999690055847168
            },
            {
               "x": 0.3260599970817566,
               "y": 0.11778855323791504,
               "z": -0.8843609690666199,
               "visibility": 0.9999603033065796
            },
            {
               "x": 0.4449217915534973,
               "y": 0.20957458019256592,
               "z": -0.23884201049804688,
               "visibility": 0.9999334812164307
            },
            {
               "x": 0.2788313031196594,
               "y": 0.1511385440826416,
               "z": -0.5953119397163391,
               "visibility": 0.9999743700027466
            },
            {
               "x": 0.4106123447418213,
               "y": 0.30965328216552734,
               "z": -0.7215467691421509,
               "visibility": 0.9999860525131226
            },
            {
               "x": 0.3517710268497467,
               "y": 0.2891625165939331,
               "z": -0.8255470395088196,
               "visibility": 0.9999895095825195
            },
            {
               "x": 0.49837708473205566,
               "y": 0.7252806425094604,
               "z": 0.07844848185777664,
               "visibility": 0.9997658133506775
            },
            {
               "x": 0.06897494196891785,
               "y": 0.5859518051147461,
               "z": -0.5268151760101318,
               "visibility": 0.9999001026153564
            },
            {
               "x": 0.5533068180084229,
               "y": 1.2540740966796875,
               "z": 0.08745885640382767,
               "visibility": 0.19238758087158203
            },
            {
               "x": -0.118104949593544,
               "y": 1.086801528930664,
               "z": -0.8692988753318787,
               "visibility": 0.6057990193367004
            },
            {
               "x": 0.5851940512657166,
               "y": 1.6800810098648071,
               "z": -0.5852705240249634,
               "visibility": 0.05823862552642822
            },
            {
               "x": -0.05090571939945221,
               "y": 1.5689830780029297,
               "z": -1.4646108150482178,
               "visibility": 0.18169839680194855
            },
            {
               "x": 0.6255064010620117,
               "y": 1.8355827331542969,
               "z": -0.7043328881263733,
               "visibility": 0.06313489377498627
            },
            {
               "x": -0.07886047661304474,
               "y": 1.744552731513977,
               "z": -1.6553975343704224,
               "visibility": 0.17370831966400146
            },
            {
               "x": 0.5744656324386597,
               "y": 1.8561089038848877,
               "z": -0.809050440788269,
               "visibility": 0.11899801343679428
            },
            {
               "x": 0.005761876702308655,
               "y": 1.7685441970825195,
               "z": -1.6855217218399048,
               "visibility": 0.27386561036109924
            },
            {
               "x": 0.5522927045822144,
               "y": 1.7942633628845215,
               "z": -0.6641672849655151,
               "visibility": 0.11476478725671768
            },
            {
               "x": 0.018924802541732788,
               "y": 1.7030994892120361,
               "z": -1.5047764778137207,
               "visibility": 0.2483518421649933
            },
            {
               "x": 0.3902798295021057,
               "y": 1.7055717706680298,
               "z": 0.2182212769985199,
               "visibility": 0.0005357805639505386
            },
            {
               "x": 0.09481163322925568,
               "y": 1.671097755432129,
               "z": -0.20764192938804626,
               "visibility": 0.0006000071880407631
            },
            {
               "x": 0.39002954959869385,
               "y": 2.540114402770996,
               "z": 0.06621052324771881,
               "visibility": 0.00748962489888072
            },
            {
               "x": 0.10777202248573303,
               "y": 2.4585928916931152,
               "z": -0.28313177824020386,
               "visibility": 0.006718870252370834
            },
            {
               "x": 0.3645751476287842,
               "y": 3.317126750946045,
               "z": 0.9001403450965881,
               "visibility": 0.005888159852474928
            },
            {
               "x": 0.09579083323478699,
               "y": 3.220769166946411,
               "z": 0.2612558603286743,
               "visibility": 0.005405900068581104
            },
            {
               "x": 0.3535842001438141,
               "y": 3.4609432220458984,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.07898814976215363,
               "y": 3.366342067718506,
               "z": 0.3033939003944397,
               "visibility": 0.0060269515961408615
            },
            {
               "x": 0.36514806747436523,
               "y": 3.5378923416137695,
               "z": 0.66165691614151,
               "visibility": 0.003311519045382738
            },
            {
               "x": 0.17760884761810303,
               "y": 3.4399209022521973,
               "z": -0.1374417394399643,
               "visibility": 0.0027362213004380465
            },
            {
               "x": 0.38490524888038635,
               "y": 0.13916242122650146,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.21628617495298386,
               "y": 3.413642644882202,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.28367601335048676,
               "y": 0.6479247331619262,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            }
         ],
         photoFn: Back_P,
      },
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: "side" as SectionNames,
      nameFA: 'نمای جانبی',
      questions: [
         {
            id: 18,
            title: 'سر به جلو',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 19,
            title: 'شانه گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 20,
            title: 'پشت گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 21,
            title: 'پشت صاف',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 22,
            title: 'گود کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 23,
            title: 'صاف کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 24,
            title: 'شکم برآمده',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 25,
            title: 'پشت تابدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 26,
            title: 'زانوی عقب رفته',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 27,
            title: 'زانوی خمیده',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "data:image/webp;base64,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",
         sampleImageLandmarks: [
            {
               "x": 0.39666038751602173,
               "y": 0.20890307426452637,
               "z": -0.928112804889679,
               "visibility": 0.9999772310256958
            },
            {
               "x": 0.4152195453643799,
               "y": 0.1446685791015625,
               "z": -0.809050440788269,
               "visibility": 0.9999586343765259
            },
            {
               "x": 0.42956918478012085,
               "y": 0.1524902582168579,
               "z": -0.8076159358024597,
               "visibility": 0.9999576807022095
            },
            {
               "x": 0.4437505006790161,
               "y": 0.1605362892150879,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.36743417382240295,
               "y": 0.12707090377807617,
               "z": -0.8850782513618469,
               "visibility": 0.9999654293060303
            },
            {
               "x": 0.34779834747314453,
               "y": 0.12230777740478516,
               "z": -0.8850782513618469,
               "visibility": 0.9999690055847168
            },
            {
               "x": 0.3260599970817566,
               "y": 0.11778855323791504,
               "z": -0.8843609690666199,
               "visibility": 0.9999603033065796
            },
            {
               "x": 0.4449217915534973,
               "y": 0.20957458019256592,
               "z": -0.23884201049804688,
               "visibility": 0.9999334812164307
            },
            {
               "x": 0.2788313031196594,
               "y": 0.1511385440826416,
               "z": -0.5953119397163391,
               "visibility": 0.9999743700027466
            },
            {
               "x": 0.4106123447418213,
               "y": 0.30965328216552734,
               "z": -0.7215467691421509,
               "visibility": 0.9999860525131226
            },
            {
               "x": 0.3517710268497467,
               "y": 0.2891625165939331,
               "z": -0.8255470395088196,
               "visibility": 0.9999895095825195
            },
            {
               "x": 0.49837708473205566,
               "y": 0.7252806425094604,
               "z": 0.07844848185777664,
               "visibility": 0.9997658133506775
            },
            {
               "x": 0.06897494196891785,
               "y": 0.5859518051147461,
               "z": -0.5268151760101318,
               "visibility": 0.9999001026153564
            },
            {
               "x": 0.5533068180084229,
               "y": 1.2540740966796875,
               "z": 0.08745885640382767,
               "visibility": 0.19238758087158203
            },
            {
               "x": -0.118104949593544,
               "y": 1.086801528930664,
               "z": -0.8692988753318787,
               "visibility": 0.6057990193367004
            },
            {
               "x": 0.5851940512657166,
               "y": 1.6800810098648071,
               "z": -0.5852705240249634,
               "visibility": 0.05823862552642822
            },
            {
               "x": -0.05090571939945221,
               "y": 1.5689830780029297,
               "z": -1.4646108150482178,
               "visibility": 0.18169839680194855
            },
            {
               "x": 0.6255064010620117,
               "y": 1.8355827331542969,
               "z": -0.7043328881263733,
               "visibility": 0.06313489377498627
            },
            {
               "x": -0.07886047661304474,
               "y": 1.744552731513977,
               "z": -1.6553975343704224,
               "visibility": 0.17370831966400146
            },
            {
               "x": 0.5744656324386597,
               "y": 1.8561089038848877,
               "z": -0.809050440788269,
               "visibility": 0.11899801343679428
            },
            {
               "x": 0.005761876702308655,
               "y": 1.7685441970825195,
               "z": -1.6855217218399048,
               "visibility": 0.27386561036109924
            },
            {
               "x": 0.5522927045822144,
               "y": 1.7942633628845215,
               "z": -0.6641672849655151,
               "visibility": 0.11476478725671768
            },
            {
               "x": 0.018924802541732788,
               "y": 1.7030994892120361,
               "z": -1.5047764778137207,
               "visibility": 0.2483518421649933
            },
            {
               "x": 0.3902798295021057,
               "y": 1.7055717706680298,
               "z": 0.2182212769985199,
               "visibility": 0.0005357805639505386
            },
            {
               "x": 0.09481163322925568,
               "y": 1.671097755432129,
               "z": -0.20764192938804626,
               "visibility": 0.0006000071880407631
            },
            {
               "x": 0.39002954959869385,
               "y": 2.540114402770996,
               "z": 0.06621052324771881,
               "visibility": 0.00748962489888072
            },
            {
               "x": 0.10777202248573303,
               "y": 2.4585928916931152,
               "z": -0.28313177824020386,
               "visibility": 0.006718870252370834
            },
            {
               "x": 0.3645751476287842,
               "y": 3.317126750946045,
               "z": 0.9001403450965881,
               "visibility": 0.005888159852474928
            },
            {
               "x": 0.09579083323478699,
               "y": 3.220769166946411,
               "z": 0.2612558603286743,
               "visibility": 0.005405900068581104
            },
            {
               "x": 0.3535842001438141,
               "y": 3.4609432220458984,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.07898814976215363,
               "y": 3.366342067718506,
               "z": 0.3033939003944397,
               "visibility": 0.0060269515961408615
            },
            {
               "x": 0.36514806747436523,
               "y": 3.5378923416137695,
               "z": 0.66165691614151,
               "visibility": 0.003311519045382738
            },
            {
               "x": 0.17760884761810303,
               "y": 3.4399209022521973,
               "z": -0.1374417394399643,
               "visibility": 0.0027362213004380465
            },
            {
               "x": 0.38490524888038635,
               "y": 0.13916242122650146,
               "z": -0.8068987131118774,
               "visibility": 0.9999394416809082
            },
            {
               "x": 0.21628617495298386,
               "y": 3.413642644882202,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            },
            {
               "x": 0.28367601335048676,
               "y": 0.6479247331619262,
               "z": 0.9897957444190979,
               "visibility": 0.005730246659368277
            }
         ],
         photoFn: Side_P,
      },
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
]

export type staticEvaluationType = typeof staticEvaluation;
export default staticEvaluation;