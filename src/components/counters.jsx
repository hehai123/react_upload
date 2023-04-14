import React, { Component } from "react";
import BossSet from "./bossSet";
import Counter from "./counter";
import Equipment from "./equipment";
import Hyper from "./hyper";
import Table from "./table";
import Table2 from "./table2";
import Table3 from "./table3";
import EnemyDef from "./enemyDef";
import TableMain from "./tableMain";
import TableTest from "./tableTest";

class Counters extends Component {
  state = {
    statsWindow: { boss: 0, damage: 0, att: 0, matt: 0, ied: 0 },
    total: { boss: 0, damage: 0, att: 0, matt: 0 },
    totalWse: { boss: 0, damage: 0, att: 0, matt: 0, ied: [] },
    totalWse2: { boss: 0, damage: 0, att: 0, matt: 0, ied: [] },
    eqSetBoss: { boss: 0, ied: 0 },
    ied: [],
    iedFinal: 0,
    enemyDef: {
      id: 1,
      desc: "Monster defense",
      max: 380,
      value: 0,
      label: "Defense",
    },
    potion: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 20,
        value: 0,
        type: "Boss",
        name: "potion",
      },
      {
        id: 2,
        desc: "Damage",
        max: 20,
        value: 0,
        type: "Damage",
        name: "potion",
      },
      {
        id: 3,
        desc: "Ied",
        max: 20,
        value: 0,
        type: "Ied",
        name: "potion",
      },
    ],
    guildSkills: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 30,
        value: 0,
        type: "Boss",
        name: "guildSkills",
        step: 3,
      },
      {
        id: 2,
        desc: "Damage",
        max: 30,
        value: 0,
        type: "Damage",
        name: "guildSkills",
        step: 3,
      },
      {
        id: 3,
        desc: "Ied",
        max: 30,
        value: 0,
        type: "Ied",
        name: "guildSkills",
        step: 3,
      },
    ],
    trait: [
      {
        id: 1,
        desc: "Ied",
        max: 10,
        value: 0,
        type: "Ied",
        name: "trait",
        step: 0.5,
      },
    ],
    inner: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 20,
        value: 0,
        type: "Boss",
        name: "inner",
        step: 1,
      },
    ],
    title: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 30,
        value: 0,
        type: "Boss",
        name: "title",
      },
      {
        id: 2,
        desc: "Ied",
        max: 30,
        value: 0,
        type: "Ied",
        name: "title",
      },
    ],
    monsterLife: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 40,
        value: 0,
        type: "Boss",
        name: "monsterLife",
      },
      {
        id: 2,
        desc: "Damage",
        max: 40,
        value: 0,
        type: "Damage",
        name: "monsterLife",
      },
      {
        id: 3,
        desc: "Ied",
        max: 45,
        value: 0,
        type: "Ied",
        name: "monsterLife",
      },
    ],
    union: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 40,
        value: 0,
        type: "Boss",
        name: "union",
      },
      {
        id: 2,
        desc: "Boss (DA)",
        max: 6,
        value: 0,
        type: "Boss",
        name: "union",
      },
      {
        id: 3,
        desc: "Boss (Kanna)",
        max: 6,
        value: 0,
        type: "Boss",
        name: "union",
      },
      {
        id: 4,
        desc: "Ied",
        max: 40,
        value: 0,
        type: "Ied",
        name: "union",
      },
      {
        id: 5,
        desc: "Ied (Blaster)",
        max: 6,
        value: 0,
        type: "Ied",
        name: "union",
      },
    ],
    hyper: [
      {
        id: 1,
        desc: "Boss Damage",
        max: 55,
        value: 0,
        type: "Boss",
        name: "hyper",
      },
      {
        id: 2,
        desc: "Damage",
        max: 45,
        value: 0,
        type: "Damage",
        name: "hyper",
        step: 3,
      },
      {
        id: 3,
        desc: "Ied",
        max: 45,
        value: 0,
        type: "Ied",
        name: "hyper",
        step: 3,
      },
    ],
    bossSet: [
      {
        id: 1,
        desc: "Dawn Boss Set",
        imageSrc: require("../images/Divine King Ring.png"),
        imageDesc: "Dawn Boss Set",
        value: ["0", "1", "2", "3", "4"],
      },
      {
        id: 2,
        desc: "Dark Boss Set",
        imageSrc: require("../images/Magical Eye Patch.png"),
        imageDesc: "Dark Boss Set",
        value: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    ],
    setNumber: [0, 0, 0, 0, 0, 0, 0, 0], // Fafnir, Absolabs, Arcaneshade, Eternal, Dawn, Dark, Monster, Lucky item (7)
    setEffect: [
      {
        // Fafnir, Absolabs, Arcaneshade, Eternal, Dawn, Dark, Monster
        0: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 30, ied: 0 },
        ],
        1: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 20, ied: 0 },
          { boss: 20, ied: 10 },
          { boss: 30, ied: 10 },
        ],
        2: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 10, ied: 10 },
          { boss: 20, ied: 10 },
          { boss: 30, ied: 10 },
        ],
        3: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 20, ied: 0 },
          { boss: 30, ied: 0 },
        ],
        4: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 10, ied: 10 },
        ],
        5: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 10, ied: 0 },
          { boss: 10, ied: 10 },
          { boss: 10, ied: 10 },
          { boss: 20, ied: 10 },
          { boss: 20, ied: 19 },
          { boss: 20, ied: 19 },
          { boss: 30, ied: 19 },
          { boss: 30, ied: 19 },
        ],
        6: [
          { boss: 0, ied: 0 },
          { boss: 0, ied: 0 },
          { boss: 0, ied: 10 },
        ],
      },
    ],
    equipment: [
      {
        id: 1,
        desc: "Hat",
        imageSrc: require("../images/No Hat.png"),
        imageDesc: "Hat",
        selected: "None",
        value: ["None", "Fafnir", "Absolabs", "Arcaneshade", "Eternal"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Hat.png"),
          },
        ],
        Fafnir: [
          {
            ied: 10,
            imageSrc: require("../images/Fafnir Hat.png"),
          },
        ],
        Absolabs: [
          {
            ied: 10,
            imageSrc: require("../images/Absolabs Hat.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 15,
            imageSrc: require("../images/Arcaneshade Mage Hat.png"),
          },
        ],
        Eternal: [
          {
            ied: 15,
            imageSrc: require("../images/Eternal Mage Hat.png"),
          },
        ],
      },
      {
        id: 2,
        desc: "Top",
        imageSrc: require("../images/No Top.png"),
        imageDesc: "Top",
        selected: "None",
        value: ["None", "Fafnir", "Eternal"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Top.png"),
          },
        ],
        Fafnir: [
          {
            ied: 5,
            imageSrc: require("../images/Fafnir Top.png"),
          },
        ],
        Eternal: [
          {
            ied: 5,
            imageSrc: require("../images/Eternal Mage Robe.png"),
          },
        ],
      },
      {
        id: 3,
        desc: "Bottom",
        imageSrc: require("../images/No Bottom.png"),
        imageDesc: "Bottom",
        selected: "None",
        value: ["None", "Fafnir", "Eternal"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Bottom.png"),
          },
        ],
        Fafnir: [
          {
            ied: 5,
            imageSrc: require("../images/Fafnir Bottom.png"),
          },
        ],
        Eternal: [
          {
            ied: 5,
            imageSrc: require("../images/Eternal Mage Pants.png"),
          },
        ],
      },
      {
        id: 4,
        desc: "Weapon",
        imageSrc: require("../images/No Weapon.png"),
        imageDesc: "Weapon",
        selected: "None",
        value: ["None", "Fafnir", "Absolabs", "Arcaneshade", "Genesis"],
        None: [
          {
            ied: 0,
            boss: 0,
            imageSrc: require("../images/No Weapon.png"),
          },
        ],
        Fafnir: [
          {
            ied: 10,
            boss: 30,
            imageSrc: require("../images/Fafnir Weapon.png"),
          },
        ],
        Absolabs: [
          {
            ied: 10,
            boss: 30,
            imageSrc: require("../images/Absolabs Weapon.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 20,
            boss: 30,
            imageSrc: require("../images/Arcaneshade Weapon.png"),
          },
        ],
        Genesis: [
          {
            ied: 20,
            boss: 30,
            imageSrc: require("../images/Genesis Fan.png"),
          },
        ],
      },
      {
        id: 5,
        desc: "Glove",
        imageSrc: require("../images/No Glove.png"),
        imageDesc: "Glove",
        selected: ["None"],
        value: ["None", "Absolabs", "Arcaneshade"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Glove.png"),
          },
        ],
        Absolabs: [
          {
            ied: 0,
            imageSrc: require("../images/Absolabs Glove.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 0,
            imageSrc: require("../images/Arcaneshade Mitts.png"),
          },
        ],
      },
      {
        id: 6,
        desc: "Cape",
        imageSrc: require("../images/No Cape.png"),
        imageDesc: "Cape",
        selected: "None",
        value: ["None", "Absolabs", "Arcaneshade"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Cape.png"),
          },
        ],
        Absolabs: [
          {
            ied: 0,
            imageSrc: require("../images/Absolabs Cape.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 0,
            imageSrc: require("../images/Arcaneshade Cape.png"),
          },
        ],
      },
      {
        id: 7,
        desc: "Shoe",
        imageSrc: require("../images/No Shoe.png"),
        imageDesc: "Shoe",
        selected: "None",
        value: ["None", "Absolabs", "Arcaneshade"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Shoe.png"),
          },
        ],
        Absolabs: [
          {
            ied: 0,
            imageSrc: require("../images/Absolabs Shoe.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 0,
            imageSrc: require("../images/Arcaneshade Shoe.png"),
          },
        ],
      },
      {
        id: 8,
        desc: "Shoulder",
        imageSrc: require("../images/No Shoulder.png"),
        imageDesc: "Shoulder",
        selected: "None",
        value: ["None", "Absolabs", "Arcaneshade"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Shoulder.png"),
          },
        ],
        Absolabs: [
          {
            ied: 0,
            imageSrc: require("../images/Absolabs Shoulder.png"),
          },
        ],
        Arcaneshade: [
          {
            ied: 0,
            imageSrc: require("../images/Arcaneshade Shoulder.png"),
          },
        ],
      },
      {
        id: 9,
        desc: "Medal",
        imageSrc: require("../images/No Medal.png"),
        imageDesc: "Medal",
        selected: "None",
        value: ["None", "Monster park"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Medal.png"),
          },
        ],
        Monster: [
          {
            ied: 10,
            imageSrc: require("../images/Seven-day Monster Parker.png"),
          },
        ],
      },
      {
        id: 10,
        desc: "Badge",
        imageSrc: require("../images/No Badge.png"),
        imageDesc: "Badge",
        selected: "None",
        value: ["None", "Monster park"],
        None: [
          {
            ied: 0,
            imageSrc: require("../images/No Badge.png"),
          },
        ],
        Monster: [
          {
            ied: 10,
            imageSrc: require("../images/Seven-day Badge.png"),
          },
        ],
      },
      {
        id: 11,
        desc: "Heart",
        imageSrc: require("../images/No Heart.png"),
        imageDesc: "Heart",
        selected: "None",
        value: ["None", "Black Heart"],
        None: [
          {
            ied: 0,
            boss: 0,
            imageSrc: require("../images/No Heart.png"),
          },
        ],
        Heart: [
          {
            ied: 30,
            boss: 30,
            imageSrc: require("../images/Black Heart.png"),
          },
        ],
      },
    ],
    skills: [
      {
        id: 1,
        desc: "Boss damage +15%",
        imageSrc: require("../images/Fury Unleashed.png"),
        imageDesc: "Fury Unleashed",
        checked: false,
        stats: { boss: 15 },
      },
      {
        id: 2,
        desc: "Damage +10%",
        imageSrc: require("../images/Wild Rage.png"),
        imageDesc: "Wild Rage",
        checked: false,
        stats: { damage: 10 },
      },
      {
        id: 3,
        desc: "Damage +10%",
        imageSrc: require("../images/Elementalism.png"),
        imageDesc: "Elementalism Rage",
        checked: false,
        stats: { damage: 10 },
      },
      {
        id: 4,
        desc: "Damage +9%, IED +9%",
        imageSrc: require("../images/Magician's Erudition.png"),
        imageDesc: "Magician's Erudition",
        checked: false,
        stats: { damage: 9, ied: 9 },
      },
      {
        id: 5,
        desc: "IED +10%",
        imageSrc: require("../images/Rhinne's Blessing.png"),
        imageDesc: "Rhinne's Blessing",
        checked: false,
        stats: { ied: 10 },
      },
      {
        id: 6,
        desc: "IED +10%",
        imageSrc: require("../images/Confidence.png"),
        imageDesc: "Confidence",
        checked: false,
        stats: { ied: 10 },
      },
      {
        id: 7,
        desc: "IED +15%",
        imageSrc: require("../images/Light Wash.png"),
        imageDesc: "Light Wash",
        checked: false,
        stats: { ied: 15 },
      },
      {
        id: 8,
        desc: "Damage +11%",
        imageSrc: require("../images/Ecstasy.png"),
        imageDesc: "Ecstasy",
        checked: false,
        stats: { damage: 11 },
      },
      {
        id: 9,
        desc: "Damage +6% / 12%",
        imageSrc: require("../images/Intensive Insult.png"),
        imageDesc: "Intensive Insult",
        checked: false,
        stats: { damage: 12 },
      },
      {
        id: 10,
        desc: "Damage +17%",
        imageSrc: require("../images/Prior Preperation.png"),
        imageDesc: "Prior Preperation",
        checked: false,
        stats: { damage: 17 },
      },
      {
        id: 11,
        desc: "Damage +45%",
        imageSrc: require("../images/Terms and Conditions.png"),
        imageDesc: "Terms and Conditions",
        checked: false,
        stats: { damage: 45 },
      },
      {
        id: 12,
        desc: "Damage +18%",
        imageSrc: require("../images/Thieves' Cunning.png"),
        imageDesc: "Thieves' Cunning",
        checked: false,
        stats: { damage: 18 },
      },
      {
        id: 13,
        desc: "Damage +8%, Boss damage +4%",
        imageSrc: require("../images/Noblesse.png"),
        imageDesc: "Noblesse",
        checked: false,
        stats: { boss: 4, damage: 8 },
      },
      {
        id: 14,
        desc: "Damage +12%",
        imageSrc: require("../images/Flow of Battle.png"),
        imageDesc: "Flow of Battle",
        checked: false,
        stats: { damage: 12 },
      },
      {
        id: 15,
        desc: "Att/Matt +10%",
        imageSrc: require("../images/Call of the Wild.png"),
        imageDesc: "Call of the Wild",
        checked: false,
        stats: { att: 10, matt: 10 },
      },
      {
        id: 16,
        desc: "Boss damage +10%",
        imageSrc: require("../images/Advanced Blessing.png"),
        imageDesc: "Advanced Blessing",
        checked: false,
        stats: { boss: 10 },
      },
      {
        id: 17,
        desc: "Damage +20%, Boss damage +25%",
        imageSrc: require("../images/Bellflower Barrier.png"),
        imageDesc: "Bellflower Barrier",
        checked: false,
        stats: { boss: 25, damage: 20 },
      },
    ],
    augSoul: [
      {
        id: 1,
        desc: "Augmented Soul",
        imageSrc: require("../images/Augmented Soul.png"),
        imageDesc: "Augmented Soul",
        selected: "Others",
        test: [
          {
            id: 1,
            lineDesc: "Select Soul Stats",
            value: [
              "Others",
              "3% Att",
              "3% Matt",
              "7% Boss",
              "5% Boss",
              "4% Boss",
              "3% Boss",
              "7% Ied",
              "5% Ied",
              "4% Ied",
              "3% Ied",
            ],
          },
        ],
      },
    ],
    weaponFlame: [
      {
        id: 1,
        desc: "Weapon Flame",
        imageSrc: require("../images/Resurrection Flame.png"),
        imageDesc: "Resurrection Flame",
        test: [
          {
            id: 1,
            desc: "Boss Damage",
            value: 0,
            max: 14,
          },
          {
            id: 2,
            desc: "Damage",
            value: 0,
            max: 7,
          },
        ],
      },
    ],
    wseMain: [
      {
        id: 1,
        desc: "Weapon",
        imageSrc: require("../images/Genesis Two-handed Axe.png"),
        imageDesc: "Weapon",
        selected: ["0", "0", "0"],
        type: "wseMain",
        className: "table-header-weapon",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 2,
        desc: "Secondary",
        imageSrc: require("../images/Secondary.png"),
        imageDesc: "Secondary",
        selected: ["0", "0", "0"],
        type: "wseMain",
        className: "table-header-secondary",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 3,
        desc: "Emblem",
        imageSrc: require("../images/Mithra's Rage.png"),
        imageDesc: "Emblem",
        selected: ["0", "0", "0"],
        type: "wseMain",
        className: "table-header-emblem",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
    ],
    wseMain2: [
      {
        id: 1,
        desc: "Weapon",
        imageSrc: require("../images/Genesis Two-handed Axe.png"),
        imageDesc: "Weapon",
        selected: ["0", "0", "0"],
        type: "wseMain2",
        className: "table-header-weapon",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 2,
        desc: "Secondary",
        imageSrc: require("../images/Secondary.png"),
        imageDesc: "Secondary",
        selected: ["0", "0", "0"],
        type: "wseMain2",
        className: "table-header-secondary",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Boss",
              "35% Boss",
              "30% Boss",
              "20% Boss",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 3,
        desc: "Emblem",
        imageSrc: require("../images/Mithra's Rage.png"),
        imageDesc: "Emblem",
        selected: ["0", "0", "0"],
        type: "wseMain2",
        className: "table-header-emblem",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "40% Ied",
              "35% Ied",
              "30% Ied",
              "15% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
    ],
    wseAdd2: [
      {
        id: 1,
        desc: "Weapon",
        imageSrc: require("../images/Genesis Two-handed Axe.png"),
        imageDesc: "Weapon",
        selected: ["0", "0", "0"],
        type: "wseAdd2",
        className: "table-header-weapon",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 2,
        desc: "Secondary",
        imageSrc: require("../images/Secondary.png"),
        imageDesc: "Secondary",
        selected: ["0", "0", "0"],
        type: "wseAdd2",
        className: "table-header-secondary",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 3,
        desc: "Emblem",
        imageSrc: require("../images/Mithra's Rage.png"),
        imageDesc: "Emblem",
        selected: ["0", "0", "0"],
        type: "wseAdd2",
        className: "table-header-emblem",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
    ],
    wseAdd: [
      {
        id: 1,
        desc: "Weapon",
        imageSrc: require("../images/Genesis Two-handed Axe.png"),
        imageDesc: "Weapon",
        selected: ["0", "0", "0"],
        type: "wseAdd",
        className: "table-header-weapon",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 2,
        desc: "Secondary",
        imageSrc: require("../images/Secondary.png"),
        imageDesc: "Secondary",
        selected: ["0", "0", "0"],
        type: "wseAdd",
        className: "table-header-secondary",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "18% Boss",
              "12% Boss",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
      {
        id: 3,
        desc: "Emblem",
        imageSrc: require("../images/Mithra's Rage.png"),
        imageDesc: "Emblem",
        selected: ["0", "0", "0"],
        type: "wseAdd",
        className: "table-header-emblem",
        test: [
          {
            id: 1,
            lineDesc: "1st line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 2,
            lineDesc: "2nd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
          {
            id: 3,
            lineDesc: "3rd line",
            selectedOption: "Others",
            value: [
              "Others",
              "12% Att",
              "9% Att",
              "6% Att",
              "3% Att",
              "12% Matt",
              "9% Matt",
              "6% Matt",
              "3% Matt",
              "5% Ied",
              "4% Ied",
              "3% Ied",
              "12% Damage",
              "9% Damage",
              "6% Damage",
              "3% Damage",
            ],
          },
        ],
      },
    ],
    additionalWaMa: [
      {
        id: 1,
        desc: "Additional Att/Matt lines",
        selected: "Wa",
        option: ["Wa", "Matt"],
        field: [
          { id: 1, value: 0, desc: "Line 1", max: 100 },
          { id: 2, value: 0, desc: "Line 2", max: 100 },
          { id: 3, value: 0, desc: "Line 3", max: 100 },
          { id: 4, value: 0, desc: "Line 4", max: 100 },
          { id: 5, value: 0, desc: "Line 5", max: 100 },
        ],
      },
    ],
    iedFill: [
      {
        id: 1,
        desc: "Additional IED lines",
        field: [
          { id: 1, value: 0, desc: "Line 1", max: 100 },
          { id: 2, value: 0, desc: "Line 2", max: 100 },
          { id: 3, value: 0, desc: "Line 3", max: 100 },
          { id: 4, value: 0, desc: "Line 4", max: 100 },
          { id: 5, value: 0, desc: "Line 5", max: 100 },
        ],
      },
      {
        id: 2,
        desc: "Additional Boss Damage lines",
        field: [
          { id: 1, value: 0, desc: "Line 1", max: 100 },
          { id: 2, value: 0, desc: "Line 2", max: 100 },
          { id: 3, value: 0, desc: "Line 3", max: 100 },
          { id: 4, value: 0, desc: "Line 4", max: 100 },
          { id: 5, value: 0, desc: "Line 5", max: 100 },
        ],
      },
      {
        id: 3,
        desc: "Additional Damage lines",
        field: [
          { id: 1, value: 0, desc: "Line 1", max: 100 },
          { id: 2, value: 0, desc: "Line 2", max: 100 },
          { id: 3, value: 0, desc: "Line 3", max: 100 },
          { id: 4, value: 0, desc: "Line 4", max: 100 },
          { id: 5, value: 0, desc: "Line 5", max: 100 },
        ],
      },
    ],
  };

  iedCalculator = (array) => {
    //const stats = this.state.statsWindow;
    const arr = array;
    const size = arr.length;
    var start = 0;
    if (size > 0) {
      start = arr[0];
    }
    for (var i = 1; i < size; i++) {
      start = (100 - start) * (arr[i] / 100) + start;
    }

    //stats.ied = start;

    //this.setState({ stats });
    this.setState({ iedFinal: start });

    //console.log(start.toFixed(2));
  };

  calculateIed = (array) => {
    const size = array.length;
    var start = 0;

    //shorten this part
    if (size > 0) {
      start = array[0];
    }
    for (var i = 1; i < size; i++) {
      start = (100 - start) * (array[i] / 100) + start;
    }

    return start;
  };

  // handleClick = (skill) => {
  //   const skills = [...this.state.skills]; // clone a copy
  //   const index = skills.indexOf(skill); // getting the index
  //   skills[index] = { ...skill }; // making a copy
  //   const checked = skills[index].checked;
  //   if (checked === false) {
  //     skills[index].checked = true;
  //   } else skills[index].checked = false;
  //   this.setState({ skills });
  //   console.log(skill.checked);
  // };

  handleCheckbox = (skill) => {
    const stats = { ...this.state.statsWindow };
    const skills = [...this.state.skills];
    const index = skills.indexOf(skill);
    const ieds = [...this.state.ied];

    const length = Object.keys(skills[index].stats).length; // getting lenght of the stats keys
    const arr = Object.keys(skills[index].stats); //getting array of the stats name i.e. boss, damage

    for (var i = 0; i < length; i++) {
      if (skills[index].checked === false) {
        if (arr[i] === "ied") {
          ieds.push(skills[index].stats[arr[i]]);
          stats[arr[i]] = this.calculateIed(ieds);
        } else stats[arr[i]] += skills[index].stats[arr[i]];
      } else {
        if (arr[i] === "ied") {
          const iedIndex = ieds.indexOf(skills[index].stats[arr[i]]);
          ieds.splice(iedIndex, 1);
          stats[arr[i]] = this.calculateIed(ieds);
        } else stats[arr[i]] -= skills[index].stats[arr[i]];
      }
    }
    skills[index].checked = !skills[index].checked;

    this.setState({ ied: ieds });
    this.setState({ skills });
    this.setState({ statsWindow: stats });

    console.log(this.state.statsWindow);
  };

  //For hyper stats etc
  handleInput = (value, input) => {
    const varName = input.name;
    const inputs = [...this.state[varName]];
    const index = inputs.indexOf(input);
    const stats = { ...this.state.statsWindow }; // sum of all boss, dmg ,att etc
    const max = inputs[index].max;

    var new_value = this.safeParseFloat(value);
    if (new_value > max) {
      new_value = max;
    }

    switch (inputs[index].type) {
      case "Ied":
        const oldIed = inputs[index].value;
        const ieds = [...this.state.ied];
        if (oldIed !== 0) {
          const iedIndex = ieds.indexOf(oldIed);
          ieds.splice(iedIndex, 1);
        }
        if (new_value !== 0) {
          ieds.push(new_value);
        }
        this.setState({ ied: ieds });
        stats.ied = this.calculateIed(ieds);
        break;
      case "Boss":
        const oldBoss = inputs[index].value;
        if (oldBoss !== 0) {
          stats.boss -= oldBoss;
        }
        if (new_value !== 0) {
          stats.boss += new_value;
        }
        break;
      case "Damage":
        const oldDmg = inputs[index].value;
        if (oldDmg !== 0) {
          stats.damage -= oldDmg;
        }
        if (new_value !== 0) {
          stats.damage += new_value;
        }
        break;
      default:
        break;
    }

    inputs[index].value = new_value;

    this.setState({ statsWindow: stats });
    this.setState({ inputs }); // what is going on here
    console.log(this.state.statsWindow);
  };

  handleIedArray = (old_ied, new_ied) => {
    const stats = { ...this.state.statsWindow };
    const ieds = [...this.state.ied];
    if (old_ied !== 0) ieds.splice(ieds.indexOf(old_ied), 1);
    if (new_ied !== 0) ieds.push(new_ied);

    stats.ied = this.calculateIed(ieds);

    this.setState({ statsWindow: stats });
    this.setState({ ied: ieds });
  };

  //Two in 1 function
  handleBoss = (old_boss, new_boss) => {
    const stats = { ...this.state.statsWindow };
    stats.boss -= old_boss;
    stats.boss += new_boss;
    this.setState({ statsWindow: stats });
  };

  //Two in 1 function
  handleDmg = (old_dmg, new_dmg) => {
    const stats = { ...this.state.statsWindow };
    stats.damage -= old_dmg;
    stats.damage += new_dmg;
    this.setState({ statsWindow: stats });
  };

  //Two in 1 function
  handleAtt = (old_att, new_att) => {
    const stats = { ...this.state.statsWindow };
    stats.att -= old_att;
    stats.att += new_att;
    this.setState({ statsWindow: stats });
  };

  addBoss = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.boss += value;
    this.setState({ statsWindow: stats });
  };

  subBoss = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.boss -= value;
    this.setState({ statsWindow: stats });
  };

  addDamage = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.damage += value;
    this.setState({ statsWindow: stats });
  };

  subDamage = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.damage -= value;
    this.setState({ statsWindow: stats });
  };

  addAtt = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.att += value;
    this.setState({ statsWindow: stats });
  };

  subAtt = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.att -= value;
    this.setState({ statsWindow: stats });
  };

  addMatt = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.matt += value;
    this.setState({ statsWindow: stats });
  };

  subMatt = (value) => {
    const stats = { ...this.state.statsWindow };
    stats.matt -= value;
    this.setState({ statsWindow: stats });
  };

  //for wse
  addWseBoss = (wse, value) => {
    const inputs = this.state[wse];
    inputs.boss += value;
    this.setState({ inputs });
  };

  subWseBoss = (wse, value) => {
    const inputs = this.state[wse];
    inputs.boss -= value;
    this.setState({ inputs });
  };

  addWseDmg = (wse, value) => {
    const inputs = this.state[wse];
    inputs.damage += value;
    this.setState({ inputs });
  };

  subWseDmg = (wse, value) => {
    const inputs = this.state[wse];
    inputs.damage -= value;
    this.setState({ inputs });
  };

  addWseAtt = (wse, value) => {
    const inputs = this.state[wse];
    inputs.att += value;
    this.setState({ inputs });
  };

  subWseAtt = (wse, value) => {
    const inputs = this.state[wse];
    inputs.att -= value;
    this.setState({ inputs });
  };

  addWseMatt = (wse, value) => {
    const inputs = this.state[wse];
    inputs.matt += value;
    this.setState({ inputs });
  };

  subWseMatt = (wse, value) => {
    const inputs = this.state[wse];
    inputs.matt -= value;
    this.setState({ inputs });
  };

  handleOption = (e, option, wse) => {
    //table map which then maps selection option
    //e is the option value
    const type = wse.type; // returns wseMain wseAdd wseMain2 wseAdd etc
    var type2 = ""; // for choosing which wse total to use

    //choosing which wse total
    if (type === "wseMain" || type === "wseAdd") {
      type2 = "totalWse";
    } else type2 = "totalWse2";

    const inputs = [...this.state[type]];
    const index = inputs.indexOf(wse);
    const optionIndex = option.id - 1; //important do not remove

    const optionOld = inputs[index].selected[optionIndex]; // recording the old selected option
    const ieds = this.state[type2].ied;
    //console.log(type2);

    const index2 = inputs[index].test.indexOf(option);
    inputs[index].test[index2].selectedOption = e;

    //converting "others" to "0"
    if (e === "Others") {
      inputs[index].selected[optionIndex] = "0";
    } else {
      inputs[index].selected[optionIndex] = e;
    }

    const check_ied = "Ied";
    const check_boss = "Boss";
    const check_damage = "Damage";
    const check_matt = "Matt";
    const check_att = "Att";
    var value_old = parseFloat(optionOld.match(/(\d+)/));
    var value_new = parseFloat(e.match(/(\d+)/));

    if (optionOld.includes(check_ied)) {
      ieds.splice(ieds.indexOf(value_old), 1);
    } else if (optionOld.includes(check_boss)) {
      this.subWseBoss(type2, value_old);
    } else if (optionOld.includes(check_att)) {
      this.subWseAtt(type2, value_old);
    } else if (optionOld.includes(check_matt)) {
      this.subWseMatt(type2, value_old);
    } else if (optionOld.includes(check_damage)) {
      this.subWseDmg(type2, value_old);
    }
    if (e.includes(check_ied)) {
      ieds.push(value_new);
    } else if (e.includes(check_boss)) {
      this.addWseBoss(type2, value_new);
    } else if (e.includes(check_att)) {
      this.addWseAtt(type2, value_new);
    } else if (e.includes(check_matt)) {
      this.addWseMatt(type2, value_new);
    } else if (e.includes(check_damage)) {
      this.addWseDmg(type2, value_new);
    }

    this.setState({ inputs });
  };

  adjustSet = (old, newer) => {
    const setNumbers = [...this.state.setNumber];
    var boss = 0;
    var ied = 0;
    var ied_final = 0;
    var ied_arr = [];

    switch (old) {
      case "Fafnir":
        if (setNumbers[7] === 1 && setNumbers[0] === 4) {
          setNumbers[0] -= 2;
        } else setNumbers[0]--;
        break;
      case "Absolabs":
        if (setNumbers[7] === 1 && setNumbers[1] === 4) {
          setNumbers[1] -= 2;
        } else setNumbers[1]--;
        break;
      case "Arcaneshade":
        if (setNumbers[7] === 1 && setNumbers[2] === 4) {
          setNumbers[2] -= 2;
        } else setNumbers[2]--;
        break;
      case "Genesis":
        setNumbers[3]--;
        setNumbers[7] = 0;
        for (var j = 0; j < 3; j++) {
          if (setNumbers[j] > 3) {
            setNumbers[j]--;
          }
        }
        break;
      case "Eternal":
        setNumbers[3]--;
        break;

      case "Monster":
        setNumbers[6]--;
        break;
      default:
        break;
    }

    // adding number of item in that set. setNumbers[7] is for lucky item
    switch (newer) {
      case "None":
        break;
      case "Fafnir":
        if (setNumbers[7] === 1 && setNumbers[0] === 2) {
          setNumbers[0] += 2;
        } else setNumbers[0]++;
        break;
      case "Absolabs":
        if (setNumbers[7] === 1 && setNumbers[1] === 2) {
          setNumbers[1] += 2;
        } else setNumbers[1]++;
        break;
      case "Arcaneshade":
        if (setNumbers[7] === 1 && setNumbers[2] === 2) {
          setNumbers[2] += 2;
        } else setNumbers[2]++;
        break;
      case "Genesis":
        setNumbers[3]++;
        setNumbers[7] = 1;
        for (var i = 0; i < 3; i++) {
          if (setNumbers[i] > 2) {
            setNumbers[i]++;
          }
        }
        break;
      case "Eternal":
        setNumbers[3]++;
        break;
      case "Monster":
        setNumbers[6]++;
        console.log("Why");
        break;
      default:
        break;
    }

    // setNumber last element is for lucky item, don't need to check
    for (var k = 0; k < setNumbers.length - 1; k++) {
      boss += this.state.setEffect[0][k][setNumbers[k]].boss;
      ied = this.state.setEffect[0][k][setNumbers[k]].ied;
      if (ied !== 0) ied_arr.push(ied);
    }

    //console.log("ied", ied_arr);

    ied_final = this.calculateIed(ied_arr);

    this.setState({ setNumber: setNumbers });
    //console.log("setstate", this.state.setNumber);
    return [boss, ied_final];
  };

  handleEquip = (e, eq) => {
    const inputs = [...this.state.equipment];
    const stats = { ...this.state.statsWindow }; // sum of all boss, dmg ,att etc
    var eqSetBosss = this.state.eqSetBoss;
    const index = inputs.indexOf(eq); // index = 3 for weapon
    //console.log("eq", eq);
    //two ieds 1) set effect 2) eq ied
    const ieds = [...this.state.ied];
    const eqSetIed_old = eqSetBosss.ied;
    const eqSetBoss_old = eqSetBosss.boss;

    var boss = 0;
    var eqSetIed_new = 0;

    var selectedOld = inputs[index].selected;

    inputs[index].selected = e;

    var e_value = e;
    if (selectedOld === "Monster park") {
      selectedOld = "Monster";
    } else if (selectedOld === "Black Heart") {
      selectedOld = "Heart";
      this.subBoss(inputs[index][selectedOld][0].boss);
    }
    if (e_value === "Monster park") {
      e_value = "Monster";
    } else if (e_value === "Black Heart") {
      e_value = "Heart";
      this.addBoss(inputs[index][e_value][0].boss);
    }

    //console.log(e_value);

    //Set eqSet effect
    var variable = this.adjustSet(selectedOld, e_value);
    boss = variable[0];
    eqSetIed_new = variable[1];

    //Eq ied
    const ied_old_value = inputs[index][selectedOld][0].ied;
    if (ied_old_value !== 0) ieds.splice(ieds.indexOf(ied_old_value), 1);

    const ied_new_value = inputs[index][e_value][0].ied;
    if (ied_new_value !== 0) ieds.push(ied_new_value);
    inputs[index].imageSrc = inputs[index][e_value][0].imageSrc;

    //Set weapon boss damage
    //Hard coded for now
    if (index === 3) {
      console.log(selectedOld, typeof e_value);
      if (selectedOld === "None") stats.boss += 30;
      if (e_value === "None") stats.boss -= 30;
    }

    eqSetBosss.boss = boss;
    const eqSetBoss_new = boss;
    eqSetBosss.ied = eqSetIed_new;

    //setting stat windows
    if (eqSetIed_old !== 0) {
      const iedIndex = ieds.indexOf(eqSetIed_old);
      ieds.splice(iedIndex, 1);
    }
    if (eqSetIed_new !== 0) ieds.push(eqSetIed_new);

    stats.boss -= eqSetBoss_old;
    stats.boss += eqSetBoss_new;
    stats.ied = this.calculateIed(ieds);

    this.setState({ eqSetBoss: eqSetBosss });
    //console.log("Eq set effect boss damage and ied: ", this.state.eqSetBoss);
    this.setState({ statsWindow: stats });
    this.setState({ ied: ieds });
    this.setState({ inputs });
    //console.log("ied array: ", ieds);
  };

  handleSet = (option, setType) => {
    var eqSetBosss = { ...this.state.eqSetBoss };
    const inputs = [...this.state.bossSet];
    const index = inputs.indexOf(setType); // index = 3 for weapon
    const setNumbers = [...this.state.setNumber]; // Fafnir, Absolabs, Arcaneshade, Eternal, Dawn, Dark, Monster, Lucky item (7)
    const stats = { ...this.state.statsWindow };
    const ieds = [...this.state.ied];

    setNumbers[index + 4] = parseInt(option);

    const boss_old = eqSetBosss.boss;
    const eqSetIed_old = eqSetBosss.ied;

    var boss = 0;
    var ied = 0;
    var ied_arr = [];
    var eqSetIed_new = 0;

    // setNumber last element is for lucky item, don't need to check
    for (var i = 0; i < setNumbers.length - 1; i++) {
      boss += this.state.setEffect[0][i][setNumbers[i]].boss;
      ied = this.state.setEffect[0][i][setNumbers[i]].ied;
      if (ied !== 0) ied_arr.push(ied);
    }
    eqSetIed_new = this.calculateIed(ied_arr);

    eqSetBosss.boss = boss;
    eqSetBosss.ied = eqSetIed_new;

    //newly added stuff
    //setting stat windows
    const iedIndex = ieds.indexOf(eqSetIed_old);
    ieds.splice(iedIndex, 1);
    ieds.push(eqSetIed_new);
    stats.ied = this.calculateIed(ieds);

    stats.boss -= boss_old;
    stats.boss += boss;

    this.setState({ statsWindow: stats });
    this.setState({ setNumber: setNumbers });
    this.setState({ eqSetBoss: eqSetBosss });
    //console.log("Eq set effect boss damage and ied: ", this.state.eqSetBoss);
  };

  //Setting enemy Defense
  handleEnemyDef = (def) => {
    this.setState({ enemyDef: { ...this.state.enemyDef, value: def } });
  };

  iedFinalDmg = () => {
    //newly added (to be done)
    //const stats = { ...this.stats.statsWindow };

    //to be removed
    const ied = this.statsIed();

    const def = this.state.enemyDef.value;
    const finalDmg = 100 - def * (1 - ied / 100);
    return finalDmg > 0 ? finalDmg.toFixed(2) : 0;
  };

  statsIed = () => {
    const ied1 = this.state.statsWindow.ied;
    var iedArray = [...this.state.totalWse.ied];
    iedArray.push(ied1);

    const iedFinal = this.calculateIed(iedArray);
    return iedFinal;
  };

  finalBoss = () => {
    const boss = this.state.statsWindow.boss + this.state.totalWse.boss;
    return boss;
  };

  finalAtt = () => {
    const att = this.state.statsWindow.att + this.state.totalWse.att;
    return att;
  };

  finalMatt = () => {
    const att = this.state.statsWindow.matt + this.state.totalWse.matt;
    return att;
  };

  finalDmg = () => {
    const att = this.state.statsWindow.damage + this.state.totalWse.damage;
    return att;
  };

  finalFinal = () => {
    const dmg = this.finalDmg();
    const boss = this.finalBoss();
    const att = this.finalAtt();
    const iedFinalDmg = this.iedFinalDmg();
    const finalFinal =
      ((dmg + boss + 100) * iedFinalDmg * (att / 100 + 1)) / 100;
    return finalFinal.toFixed(2);
  };

  finalBoss2 = () => {
    const boss = this.state.statsWindow.boss + this.state.totalWse2.boss;
    return boss;
  };

  finalAtt2 = () => {
    const att = this.state.statsWindow.att + this.state.totalWse2.att;
    return att;
  };

  finalMatt2 = () => {
    const att = this.state.statsWindow.matt + this.state.totalWse2.matt;
    return att;
  };

  finalDmg2 = () => {
    const att = this.state.statsWindow.damage + this.state.totalWse2.damage;
    return att;
  };

  statsIed2 = () => {
    const ied1 = this.state.statsWindow.ied;
    var iedArray = [...this.state.totalWse2.ied];
    iedArray.push(ied1);

    const iedFinal = this.calculateIed(iedArray);
    return iedFinal;
  };

  iedFinalDmg2 = () => {
    const ied = this.statsIed2();

    const def = this.state.enemyDef.value;
    const finalDmg = 100 - def * (1 - ied / 100);
    return finalDmg > 0 ? finalDmg.toFixed(2) : 0;
  };

  finalFinal2 = () => {
    const dmg = this.finalDmg2();
    const boss = this.finalBoss2();
    const att = this.finalAtt2();
    const iedFinalDmg = this.iedFinalDmg2();
    const finalFinal =
      ((dmg + boss + 100) * iedFinalDmg * (att / 100 + 1)) / 100;
    return finalFinal.toFixed(2);
  };

  //To prevent NaN problem
  safeParseFloat = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  handleInputField = (value, option, option_main) => {
    const inputs = [...this.state.iedFill];
    const index_main = inputs.indexOf(option_main);
    const index = inputs[index_main].field.indexOf(option);

    const old_value = inputs[index_main].field[index].value;

    const new_value = parseInt(this.safeParseFloat(value));

    //0 for ied, 1 for bd, 2 for dmg
    switch (index_main) {
      case 0:
        this.handleIedArray(old_value, new_value);
        break;
      case 1:
        this.handleBoss(old_value, new_value);
        break;
      case 2:
        this.handleDmg(old_value, new_value);
        break;
      case 3:
        this.handleAtt(old_value, new_value);
        break;
      default:
        break;
    }

    inputs[index_main].field[index].value = new_value;
    this.setState({ inputs });
    //console.log(this.state.iedFill);
  };

  handleInputFieldAtt = (value, option) => {
    const inputs = [...this.state.additionalWaMa];
    const index = inputs[0].field.indexOf(option);

    const old_value = inputs[0].field[index].value;

    const new_value = parseInt(this.safeParseFloat(value));
    this.handleAtt(old_value, new_value);

    inputs[0].field[index].value = new_value;
    this.setState({ inputs });
  };

  handleAugSoul = (selected) => {
    const stats = { ...this.state.statsWindow };
    const inputs = [...this.state.augSoul];
    const ieds = [...this.state.ied];
    var optionOld = inputs[0].selected; // recording the old selected option

    if (optionOld === "Others") {
      optionOld = "0";
    }

    const check_ied = "Ied";
    const check_boss = "Boss";
    const check_damage = "Damage";
    const check_matt = "Matt";
    const check_att = "Att";
    var match_old = parseFloat(optionOld.match(/(\d+)/));
    var match_new = parseFloat(selected.match(/(\d+)/));

    if (optionOld.includes(check_ied)) {
      ieds.splice(ieds.indexOf(match_old), 1);
    } else if (optionOld.includes(check_boss)) {
      this.subBoss(match_old);
    } else if (optionOld.includes(check_att)) {
      this.subAtt(match_old);
    } else if (optionOld.includes(check_matt)) {
      this.subMatt(match_old);
    } else if (optionOld.includes(check_damage)) {
      this.subDamage(match_old);
    }
    if (selected.includes(check_ied)) {
      ieds.push(match_new);
    } else if (selected.includes(check_boss)) {
      this.addBoss(match_new);
    } else if (selected.includes(check_att)) {
      this.addAtt(match_new);
    } else if (selected.includes(check_matt)) {
      this.addMatt(match_new);
    } else if (selected.includes(check_damage)) {
      this.addDamage(match_new);
    }

    inputs[0].selected = selected;

    stats.ied = this.calculateIed(ieds);

    this.setState({ statsWindow: stats });
    this.setState({ inputs });
    this.iedCalculator(ieds);
    this.setState({ ied: ieds });
  };

  handleWeaponFlame = (value, option) => {
    const stats = { ...this.state.statsWindow };
    const inputs = [...this.state.weaponFlame];
    const index = inputs[0].test.indexOf(option);

    const old_value = inputs[0].test[index].value;
    var new_value = this.safeParseFloat(value);

    switch (index) {
      //boss dmg
      case 0:
        stats.boss -= old_value;
        stats.boss += new_value;
        break;
      //damage
      case 1:
        stats.damage -= old_value;
        stats.damage += new_value;
        break;
      default:
        break;
    }

    inputs[0].test[index].value = new_value;

    this.setState({ statsWindow: stats });
    this.setState({ inputs });
  };

  handleDuplicate = () => {
    const main = [...this.state.wseMain];
    const add = [...this.state.wseAdd];
    const main2 = [...this.state.wseMain2];
    const add2 = [...this.state.wseAdd2];
    const totalWse = { ...this.state.totalWse };
    const totalWse2 = { ...this.state.totalWse2 };

    //main pot
    for (var i = 0; i < main.length; i++) {
      main2[i].selected = main[i].selected;
      for (var j = 0; j < main[i].test.length; j++) {
        main2[i].test[j].selectedOption = main[i].test[j].selectedOption;
      }
    }

    //add pot
    for (i = 0; i < add.length; i++) {
      add2[i].selected = add[i].selected;
      for (j = 0; j < add[i].test.length; j++) {
        add2[i].test[j].selectedOption = add[i].test[j].selectedOption;
      }
    }

    //must be done like this to prevent it from copying the ied array
    totalWse2.boss = totalWse.boss;
    totalWse2.att = totalWse.att;
    totalWse2.matt = totalWse.matt;
    totalWse2.damage = totalWse.damage;
    totalWse2.ied = [...totalWse.ied];

    this.setState({ totalWse2 });
    this.setState({ main2 });
    this.setState({ add2 });
  };

  handleResult = () => {
    var resultsClass = "";

    const final1 = parseFloat(this.finalFinal());
    const final2 = parseFloat(this.finalFinal2());
    var diff = 0;
    var display = "";

    if (final1 === final2) {
      display = "Your WSE combinations have the same final damage output.";
      resultsClass = "div-results-same";
    } else if (final1 > final2) {
      diff = (final1 / final2 - 1) * 100;
      diff = diff.toFixed(2);
      display = "Your first WSE combination is stronger by " + diff + "%.";
      resultsClass = "div-results-left";
    } else {
      diff = (final2 / final1 - 1) * 100;
      diff = diff.toFixed(2);
      display = "Your second WSE combination is stronger by " + diff + "%.";
      resultsClass = "div-results-right";
    }

    return [display, resultsClass];
  };

  handleBD = () => {
    const skills = [...this.state.skills];
    skills[0].checked = !skills[0].checked;

    this.setState({ skills: skills });
  };

  render() {
    return (
      <div className="table_overall">
        <div>
          <label className="header">Link Skills</label>
          <div className="skill_table">
            {this.state.skills.map((skills) => (
              <Counter
                key={skills.id}
                onChange={this.handleCheckbox}
                skills={skills}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="header">Equip Set</label>
          <div className="equip_table">
            {this.state.equipment.map((eq) => (
              <Equipment key={eq.id} eq={eq} onSelect={this.handleEquip} />
            ))}
            {this.state.bossSet.map((set) => (
              <BossSet key={set.id} set={set} onSelect={this.handleSet} />
            ))}
          </div>
        </div>

        <div>
          <label className="header">Others</label>
          <div className="input_main_table">
            <div className="input_field">
              <p className="table_header">Union Stats</p>
              {this.state.union.map((union) => (
                <Hyper
                  key={union.id}
                  hyper={union}
                  onInput={this.handleInput}
                />
              ))}
            </div>
            <div className="input_field">
              <p className="table_header">
                Guild Skills
                <img
                  className="icon_image"
                  src={require("../images/Boss Slayers.png")}
                  alt=""
                  title="Guild Skills"
                />
              </p>
              {this.state.guildSkills.map((skill) => (
                <Hyper
                  key={skill.id}
                  hyper={skill}
                  onInput={this.handleInput}
                />
              ))}
            </div>

            <div className="input_field">
              <p className="table_header">
                Potions
                <img
                  className="icon_image"
                  src={require("../images/Sparkling Red Star Potion.png")}
                  alt=""
                  title="Potions"
                />
              </p>
              {this.state.potion.map((pot) => (
                <Hyper key={pot.id} hyper={pot} onInput={this.handleInput} />
              ))}
            </div>

            <div className="input_field">
              <p className="table_header">Hyper Stats</p>
              {this.state.hyper.map((hyper) => (
                <Hyper
                  key={hyper.id}
                  hyper={hyper}
                  onInput={this.handleInput}
                />
              ))}
            </div>

            <div className="input_field">
              <p className="table_header">Monster Life</p>
              {this.state.monsterLife.map((hyper) => (
                <Hyper
                  key={hyper.id}
                  hyper={hyper}
                  onInput={this.handleInput}
                />
              ))}
            </div>

            {/* Weapon Flame Stats */}
            {this.state.weaponFlame.map((flame) => (
              <TableTest
                key={flame.id} // check this pls
                main={flame}
                onChange={this.handleWeaponFlame}
              />
            ))}

            <div className="input_field">
              <p className="table_header">
                Title
                <img
                  className="icon_image"
                  src={require("../images/Title.png")}
                  alt=""
                  title="Title"
                />
              </p>
              {this.state.title.map((title) => (
                <Hyper
                  key={title.id}
                  hyper={title}
                  onInput={this.handleInput}
                />
              ))}
            </div>

            {/* For Aug Soul */}
            <div className="input-field-2">
              {this.state.augSoul.map((soul) => (
                <TableMain
                  key={soul.id} // check this pls
                  main={soul}
                  onChange={this.handleAugSoul}
                />
              ))}
            </div>

            <div className="input_field">
              <p className="table_header">
                Traits
                <img
                  className="icon_image"
                  src={require("../images/Premium Hair Wax.png")}
                  alt=""
                  title="Traits"
                />
              </p>
              {this.state.trait.map((trait) => (
                <Hyper
                  key={trait.id}
                  hyper={trait}
                  onInput={this.handleInput}
                />
              ))}
            </div>

            <div className="input_field">
              <p className="table_header">Inner Ability</p>
              {this.state.inner.map((inner) => (
                <Hyper
                  key={inner.id}
                  hyper={inner}
                  onInput={this.handleInput}
                />
              ))}
            </div>
          </div>
        </div>

        {/* For additional inputs */}
        <div className="table-sub">
          {this.state.iedFill.map((input) => (
            <Table2
              key={input.id} // check this pls
              input={input}
              onChange={this.handleInputField}
            />
          ))}

          {this.state.additionalWaMa.map((input) => (
            <Table3
              key={input.id} // check this pls
              input={input}
              onInput={this.handleInputFieldAtt}
            />
          ))}
        </div>

        {/* For enemy defense */}
        <div className="div-defense">
          {
            <EnemyDef
              key={this.state.enemyDef.id}
              input={this.state.enemyDef}
              onChange={this.handleEnemyDef}
            />
          }
        </div>

        <div className="div-wse-compare">
          {/* for comparison, first wse */}
          <div className="div-wse-compare-table">
            <div className="div-wse-2-tables">
              <div className="div-wse-group">
                <p className="group-header-wse-left">Main Potential</p>
                <div className="counters-div">
                  {this.state.wseMain.map((table) => (
                    <Table
                      key={table.id}
                      table={table}
                      onSelect={this.handleOption}
                    />
                  ))}
                </div>
              </div>

              <div className="div-wse-group">
                <p className="group-header-wse-left">Additional Potential</p>
                <div className="counters-div">
                  {this.state.wseAdd.map((table) => (
                    <Table
                      key={table.id}
                      table={table}
                      onSelect={this.handleOption}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="stats_div">
              <section className="stats-details">
                <p className="stats-header-1">Stats Details</p>
                <table className="stats-table">
                  <tbody>
                    <tr className="tr">
                      <th className="th">Attack %</th>
                      <td className="td">{this.finalAtt()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Magic Attack %</th>
                      <td className="td">{this.finalAtt()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Damage %</th>
                      <td className="td">{this.finalDmg()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Boss Damage %</th>
                      <td className="td">{this.finalBoss()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Ignore Def %</th>
                      <td className="td">{this.state.enemyDef.value}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Final Score</th>
                      <td className="td">{this.finalFinal()}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>

          {/* for comparison, second wse */}
          <div className="div-wse-compare-table">
            <div className="div-wse-2-tables">
              <div className="div-wse-group">
                <p className="group-header-wse-right">Main Potential</p>
                <div className="counters-div">
                  {this.state.wseMain2.map((table) => (
                    <Table
                      key={table.id}
                      table={table}
                      onSelect={this.handleOption}
                    />
                  ))}
                </div>
              </div>

              <div className="div-wse-group">
                <p className="group-header-wse-right">Additional Potential</p>
                <div className="counters-div">
                  {this.state.wseAdd2.map((table) => (
                    <Table
                      key={table.id}
                      table={table}
                      onSelect={this.handleOption}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="stats_div">
              <section className="stats-details">
                <p className="stats-header-2">Stats Details</p>
                <table className="stats-table">
                  <tbody>
                    <tr className="tr">
                      <th className="th">Attack %</th>
                      <td className="td">{this.finalAtt()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Magic Attack %</th>
                      <td className="td">{this.finalAtt()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Damage %</th>
                      <td className="td">{this.finalDmg()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Boss Damage %</th>
                      <td className="td">{this.finalBoss()}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Ignore Def %</th>
                      <td className="td">{this.state.enemyDef.value}</td>
                    </tr>
                    <tr className="tr">
                      <th className="th">Final Score</th>
                      <td className="td">{this.finalFinal()}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
        <button className="button-duplicate" onClick={this.handleDuplicate}>
          Duplicate WSE
        </button>
        {/* <button onClick={this.handleBD}>Click me pls</button> */}
        <div className={this.handleResult()[1]}>{this.handleResult()[0]}</div>
      </div>
    );
  }
}

export default Counters;
