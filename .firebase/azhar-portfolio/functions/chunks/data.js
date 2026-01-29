import { e as escape_html } from "./escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const image2 = {
  sources: {
    avif: "/_app/immutable/assets/002.DpcMT64V.avif 960w, /_app/immutable/assets/002.DR1JS3aH.avif 1920w",
    webp: "/_app/immutable/assets/002.BPT39sw1.webp 960w, /_app/immutable/assets/002.GeZSz9yJ.webp 1920w",
    png: "/_app/immutable/assets/002.Cit0Y8XK.png 960w, /_app/immutable/assets/002.BPr0AtI7.png 1920w"
  },
  img: {
    src: "/_app/immutable/assets/002.BPr0AtI7.png",
    w: 1920,
    h: 1080
  }
};
const image3 = {
  sources: {
    avif: "/_app/immutable/assets/003.DMzZLrB_.avif 960w, /_app/immutable/assets/003.DqoFMyB9.avif 1920w",
    webp: "/_app/immutable/assets/003.BRZG7Fqh.webp 960w, /_app/immutable/assets/003.BitVLsq1.webp 1920w",
    png: "/_app/immutable/assets/003.DmUJ9BYO.png 960w, /_app/immutable/assets/003.BlFZAwin.png 1920w"
  },
  img: {
    src: "/_app/immutable/assets/003.BlFZAwin.png",
    w: 1920,
    h: 1080
  }
};
const image4 = {
  sources: {
    avif: "/_app/immutable/assets/004.CZIgs7Km.avif 960w, /_app/immutable/assets/004.1qxBk7PP.avif 1920w",
    webp: "/_app/immutable/assets/004.DR10cXvH.webp 960w, /_app/immutable/assets/004.DPQgz9Ux.webp 1920w",
    png: "/_app/immutable/assets/004.DV--Yiu3.png 960w, /_app/immutable/assets/004.j4CprtcT.png 1920w"
  },
  img: {
    src: "/_app/immutable/assets/004.j4CprtcT.png",
    w: 1920,
    h: 1080
  }
};
const image5 = {
  sources: {
    avif: "/_app/immutable/assets/005.D6QlMqHn.avif 960w, /_app/immutable/assets/005.BmhlUL4R.avif 1920w",
    webp: "/_app/immutable/assets/005.B_aVPfVr.webp 960w, /_app/immutable/assets/005.BvXwABQ2.webp 1920w",
    png: "/_app/immutable/assets/005.CBpD84iO.png 960w, /_app/immutable/assets/005.9kPpB82S.png 1920w"
  },
  img: {
    src: "/_app/immutable/assets/005.9kPpB82S.png",
    w: 1920,
    h: 1080
  }
};
const ptsScreen1 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen1.CgBEizaR.avif 1133w, /_app/immutable/assets/pts_screen1.DIe3rklt.avif 2266w",
    webp: "/_app/immutable/assets/pts_screen1.BSQYH5Fq.webp 1133w, /_app/immutable/assets/pts_screen1.Dk_a79tU.webp 2266w",
    png: "/_app/immutable/assets/pts_screen1.CDYVTz2U.png 1133w, /_app/immutable/assets/pts_screen1.ClrZq64s.png 2266w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen1.ClrZq64s.png",
    w: 2266,
    h: 1488
  }
};
const ptsScreen2 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen2.C_93gJML.avif 1133w, /_app/immutable/assets/pts_screen2.B4cBJxFh.avif 2266w",
    webp: "/_app/immutable/assets/pts_screen2.CyD-ACcZ.webp 1133w, /_app/immutable/assets/pts_screen2.DL61SsM7.webp 2266w",
    png: "/_app/immutable/assets/pts_screen2.uGdqeMJY.png 1133w, /_app/immutable/assets/pts_screen2.DdQ45nYV.png 2266w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen2.DdQ45nYV.png",
    w: 2266,
    h: 1488
  }
};
const ptsScreen3 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen3.BsBpbm4q.avif 1133w, /_app/immutable/assets/pts_screen3.D2Js8YmS.avif 2266w",
    webp: "/_app/immutable/assets/pts_screen3.BECpRoVE.webp 1133w, /_app/immutable/assets/pts_screen3.BGNnVqNu.webp 2266w",
    png: "/_app/immutable/assets/pts_screen3.BGRa5vR4.png 1133w, /_app/immutable/assets/pts_screen3.ClAait5F.png 2266w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen3.ClAait5F.png",
    w: 2266,
    h: 1488
  }
};
const ptsScreen4 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen4.DWBe2h_l.avif 1133w, /_app/immutable/assets/pts_screen4.CSqrxZc5.avif 2266w",
    webp: "/_app/immutable/assets/pts_screen4.B67-cits.webp 1133w, /_app/immutable/assets/pts_screen4.CSKcJ7Ci.webp 2266w",
    png: "/_app/immutable/assets/pts_screen4.BxravF_D.png 1133w, /_app/immutable/assets/pts_screen4.Bku2vpW1.png 2266w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen4.Bku2vpW1.png",
    w: 2266,
    h: 1488
  }
};
const ptsScreen5 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen5.l3xbBRXF.avif 1133w, /_app/immutable/assets/pts_screen5.MjbkeqQU.avif 2266w",
    webp: "/_app/immutable/assets/pts_screen5.VwlbPUvI.webp 1133w, /_app/immutable/assets/pts_screen5.i56tHb_n.webp 2266w",
    png: "/_app/immutable/assets/pts_screen5.D81IRcou.png 1133w, /_app/immutable/assets/pts_screen5.-ipODkOb.png 2266w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen5.-ipODkOb.png",
    w: 2266,
    h: 1488
  }
};
const ptsScreen6 = {
  sources: {
    avif: "/_app/immutable/assets/pts_screen6.CSDQQTkF.avif 960w, /_app/immutable/assets/pts_screen6.FM3IA1IZ.avif 1920w",
    webp: "/_app/immutable/assets/pts_screen6.Ck5Wxlp3.webp 960w, /_app/immutable/assets/pts_screen6.l7kMl9ah.webp 1920w",
    png: "/_app/immutable/assets/pts_screen6.CEgE49VI.png 960w, /_app/immutable/assets/pts_screen6.Ctee4ll2.png 1920w"
  },
  img: {
    src: "/_app/immutable/assets/pts_screen6.Ctee4ll2.png",
    w: 1920,
    h: 1080
  }
};
const freight1 = {
  sources: {
    avif: "/_app/immutable/assets/freight1.D2W767EV.avif 645w, /_app/immutable/assets/freight1.1HxlSLQs.avif 1290w",
    webp: "/_app/immutable/assets/freight1.fGEcDCx2.webp 645w, /_app/immutable/assets/freight1.Cw3UnfSJ.webp 1290w",
    png: "/_app/immutable/assets/freight1.CiuqSzeB.png 645w, /_app/immutable/assets/freight1.BugXeIEA.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/freight1.BugXeIEA.png",
    w: 1290,
    h: 2796
  }
};
const freight2 = {
  sources: {
    avif: "/_app/immutable/assets/freight2.bkuGYpho.avif 645w, /_app/immutable/assets/freight2.DcSx5s5x.avif 1290w",
    webp: "/_app/immutable/assets/freight2.DMwJZedG.webp 645w, /_app/immutable/assets/freight2.GtWF1SUy.webp 1290w",
    png: "/_app/immutable/assets/freight2.Dcl75R-s.png 645w, /_app/immutable/assets/freight2.DK-g3uMC.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/freight2.DK-g3uMC.png",
    w: 1290,
    h: 2796
  }
};
const freight3 = {
  sources: {
    avif: "/_app/immutable/assets/freight3.Cqft01C5.avif 645w, /_app/immutable/assets/freight3.CaSCJzL9.avif 1290w",
    webp: "/_app/immutable/assets/freight3.BFH6OYsg.webp 645w, /_app/immutable/assets/freight3.LoSS8K0-.webp 1290w",
    png: "/_app/immutable/assets/freight3.BQMIYRl5.png 645w, /_app/immutable/assets/freight3.Cyb4DVVf.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/freight3.Cyb4DVVf.png",
    w: 1290,
    h: 2796
  }
};
const saakin1 = {
  sources: {
    avif: "/_app/immutable/assets/saakin1.B8viHK9M.avif 645w, /_app/immutable/assets/saakin1.D0V5uosO.avif 1290w",
    webp: "/_app/immutable/assets/saakin1.BqvQBfnt.webp 645w, /_app/immutable/assets/saakin1.CaZPFbC9.webp 1290w",
    png: "/_app/immutable/assets/saakin1.8J8IPOjs.png 645w, /_app/immutable/assets/saakin1.D-5QHpPG.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/saakin1.D-5QHpPG.png",
    w: 1290,
    h: 2796
  }
};
const saakin2 = {
  sources: {
    avif: "/_app/immutable/assets/saakin2.C7cyBMoM.avif 645w, /_app/immutable/assets/saakin2.DSZDTPdG.avif 1290w",
    webp: "/_app/immutable/assets/saakin2.UjK6dl51.webp 645w, /_app/immutable/assets/saakin2.zjDpmoOP.webp 1290w",
    png: "/_app/immutable/assets/saakin2.CM3FxJWX.png 645w, /_app/immutable/assets/saakin2.Cm_ZfFCs.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/saakin2.Cm_ZfFCs.png",
    w: 1290,
    h: 2796
  }
};
const saakin3 = {
  sources: {
    avif: "/_app/immutable/assets/saakin3.B9IZAkRj.avif 645w, /_app/immutable/assets/saakin3.CYSTsiLw.avif 1290w",
    webp: "/_app/immutable/assets/saakin3.Cnrc-Y6F.webp 645w, /_app/immutable/assets/saakin3.E1xAqz2D.webp 1290w",
    png: "/_app/immutable/assets/saakin3.ChXH6lrK.png 645w, /_app/immutable/assets/saakin3.CbGU0vz-.png 1290w"
  },
  img: {
    src: "/_app/immutable/assets/saakin3.CbGU0vz-.png",
    w: 1290,
    h: 2796
  }
};
const saakin4 = {
  sources: {
    avif: "/_app/immutable/assets/saakin4.D1sab2J8.avif 642w, /_app/immutable/assets/saakin4.BDmga1_d.avif 1284w",
    webp: "/_app/immutable/assets/saakin4.BzVOvsO7.webp 642w, /_app/immutable/assets/saakin4.YRWAsmxF.webp 1284w",
    png: "/_app/immutable/assets/saakin4.DLid5_4N.png 642w, /_app/immutable/assets/saakin4.DArzC3mT.png 1284w"
  },
  img: {
    src: "/_app/immutable/assets/saakin4.DArzC3mT.png",
    w: 1284,
    h: 2778
  }
};
const nology1 = {
  sources: {
    avif: "/_app/immutable/assets/nology1.BTbf8FwN.avif 603w, /_app/immutable/assets/nology1.Ds9OE79f.avif 1206w",
    webp: "/_app/immutable/assets/nology1.NsGAO9CI.webp 603w, /_app/immutable/assets/nology1.DUfLKeZa.webp 1206w",
    png: "/_app/immutable/assets/nology1.B2Dpugt0.png 603w, /_app/immutable/assets/nology1.Dn0ld7Ox.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology1.Dn0ld7Ox.png",
    w: 1206,
    h: 2622
  }
};
const nology2 = {
  sources: {
    avif: "/_app/immutable/assets/nology2.CH1mGLA5.avif 603w, /_app/immutable/assets/nology2.DDoFlowz.avif 1206w",
    webp: "/_app/immutable/assets/nology2.SYaUEkfB.webp 603w, /_app/immutable/assets/nology2.yJqTnfWW.webp 1206w",
    png: "/_app/immutable/assets/nology2.D57Qn4dU.png 603w, /_app/immutable/assets/nology2.XmUQFhmV.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology2.XmUQFhmV.png",
    w: 1206,
    h: 2622
  }
};
const nology3 = {
  sources: {
    avif: "/_app/immutable/assets/nology3.DEh4gp_Z.avif 603w, /_app/immutable/assets/nology3.BEGfL8-9.avif 1206w",
    webp: "/_app/immutable/assets/nology3.CKo3LUdN.webp 603w, /_app/immutable/assets/nology3.CcJkulok.webp 1206w",
    png: "/_app/immutable/assets/nology3.DECfgUC4.png 603w, /_app/immutable/assets/nology3.lyBm_bYS.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology3.lyBm_bYS.png",
    w: 1206,
    h: 2622
  }
};
const nology4 = {
  sources: {
    avif: "/_app/immutable/assets/nology4.CXqCzCDb.avif 603w, /_app/immutable/assets/nology4.CPEh3Bk9.avif 1206w",
    webp: "/_app/immutable/assets/nology4.Dfdx5MML.webp 603w, /_app/immutable/assets/nology4.L3vQymlJ.webp 1206w",
    png: "/_app/immutable/assets/nology4.81A82MEy.png 603w, /_app/immutable/assets/nology4.DJEqAouO.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology4.DJEqAouO.png",
    w: 1206,
    h: 2622
  }
};
const nology5 = {
  sources: {
    avif: "/_app/immutable/assets/nology5.CAq-3Aci.avif 603w, /_app/immutable/assets/nology5.GH5dbtZH.avif 1206w",
    webp: "/_app/immutable/assets/nology5.BdvYpsEb.webp 603w, /_app/immutable/assets/nology5.BUPyLI-O.webp 1206w",
    png: "/_app/immutable/assets/nology5.DYpqcUTg.png 603w, /_app/immutable/assets/nology5.qL7gjnB2.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology5.qL7gjnB2.png",
    w: 1206,
    h: 2622
  }
};
const nology6 = {
  sources: {
    avif: "/_app/immutable/assets/nology6.CfmDJWCZ.avif 603w, /_app/immutable/assets/nology6.2hPnlXa2.avif 1206w",
    webp: "/_app/immutable/assets/nology6.l5msQlp1.webp 603w, /_app/immutable/assets/nology6.CnW5SUnc.webp 1206w",
    png: "/_app/immutable/assets/nology6.Ca2ovrqY.png 603w, /_app/immutable/assets/nology6.b1-r6OYC.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology6.b1-r6OYC.png",
    w: 1206,
    h: 2622
  }
};
const nology7 = {
  sources: {
    avif: "/_app/immutable/assets/nology7.HP7-PwvN.avif 603w, /_app/immutable/assets/nology7.BSzxGf_h.avif 1206w",
    webp: "/_app/immutable/assets/nology7.Cc6LIMOY.webp 603w, /_app/immutable/assets/nology7.BdaECNZa.webp 1206w",
    png: "/_app/immutable/assets/nology7.D0O-fp3V.png 603w, /_app/immutable/assets/nology7._ozDGB5G.png 1206w"
  },
  img: {
    src: "/_app/immutable/assets/nology7._ozDGB5G.png",
    w: 1206,
    h: 2622
  }
};
const nology8 = {
  sources: {
    avif: "/_app/immutable/assets/nology8.DUiMBMLD.avif 1497w, /_app/immutable/assets/nology8.DJOS0Zpn.avif 2994w",
    webp: "/_app/immutable/assets/nology8.CUWKlZXj.webp 1497w, /_app/immutable/assets/nology8.ipd0h6uw.webp 2994w",
    png: "/_app/immutable/assets/nology8.CAO-owVE.png 1497w, /_app/immutable/assets/nology8.pQGl5woJ.png 2994w"
  },
  img: {
    src: "/_app/immutable/assets/nology8.pQGl5woJ.png",
    w: 2994,
    h: 1600
  }
};
const nology9 = {
  sources: {
    avif: "/_app/immutable/assets/nology9.6e6epW2Q.avif 1024w, /_app/immutable/assets/nology9.BiFJl_QQ.avif 2048w",
    webp: "/_app/immutable/assets/nology9.BZH_H8zR.webp 1024w, /_app/immutable/assets/nology9.BboFpXe0.webp 2048w",
    png: "/_app/immutable/assets/nology9.D2heiE6X.png 1024w, /_app/immutable/assets/nology9.DdMN4xoT.png 2048w"
  },
  img: {
    src: "/_app/immutable/assets/nology9.DdMN4xoT.png",
    w: 2048,
    h: 2732
  }
};
const nology10 = {
  sources: {
    avif: "/_app/immutable/assets/nology10.BRp6U8k0.avif 1024w, /_app/immutable/assets/nology10.UXMkwg25.avif 2048w",
    webp: "/_app/immutable/assets/nology10.DY_onnIK.webp 1024w, /_app/immutable/assets/nology10.DwYoEoo7.webp 2048w",
    png: "/_app/immutable/assets/nology10.DvTpVdsO.png 1024w, /_app/immutable/assets/nology10.HX0TnJw7.png 2048w"
  },
  img: {
    src: "/_app/immutable/assets/nology10.HX0TnJw7.png",
    w: 2048,
    h: 2732
  }
};
const nology11 = {
  sources: {
    avif: "/_app/immutable/assets/nology11.BsV9UYMj.avif 1024w, /_app/immutable/assets/nology11.CcqKAn3j.avif 2048w",
    webp: "/_app/immutable/assets/nology11.xzeoGE8I.webp 1024w, /_app/immutable/assets/nology11.CG4YzLJC.webp 2048w",
    png: "/_app/immutable/assets/nology11.DPU1cqBi.png 1024w, /_app/immutable/assets/nology11.SZUR9CPq.png 2048w"
  },
  img: {
    src: "/_app/immutable/assets/nology11.SZUR9CPq.png",
    w: 2048,
    h: 2732
  }
};
const nology12 = {
  sources: {
    avif: "/_app/immutable/assets/nology12.B7Rfco1R.avif 1024w, /_app/immutable/assets/nology12.BPMlPhe0.avif 2048w",
    webp: "/_app/immutable/assets/nology12.B7Jvf-r2.webp 1024w, /_app/immutable/assets/nology12.D7WQYKXl.webp 2048w",
    png: "/_app/immutable/assets/nology12.Ed5RyepF.png 1024w, /_app/immutable/assets/nology12.BSPRrzW6.png 2048w"
  },
  img: {
    src: "/_app/immutable/assets/nology12.BSPRrzW6.png",
    w: 2048,
    h: 2732
  }
};
const image6 = {
  sources: {
    avif: "/_app/immutable/assets/006.BeIOY-m8.avif 960w, /_app/immutable/assets/006.BXy-8eYy.avif 1920w",
    webp: "/_app/immutable/assets/006.DRc7XmZ8.webp 960w, /_app/immutable/assets/006.DWGqqMvI.webp 1920w",
    jpeg: "/_app/immutable/assets/006.niUdGVhp.jpeg 960w, /_app/immutable/assets/006.C3ws2Los.jpeg 1920w"
  },
  img: {
    src: "/_app/immutable/assets/006.C3ws2Los.jpeg",
    w: 1920,
    h: 1080
  }
};
const image7 = {
  sources: {
    avif: "/_app/immutable/assets/007.BTS86xmT.avif 3544w, /_app/immutable/assets/007.BUN1oSaA.avif 7088w",
    webp: "/_app/immutable/assets/007.DjgPOU4F.webp 3544w, /_app/immutable/assets/007.C244G9Ut.webp 7088w",
    png: "/_app/immutable/assets/007.CbI7TQMW.png 3544w, /_app/immutable/assets/007.wCSDrxVe.png 7088w"
  },
  img: {
    src: "/_app/immutable/assets/007.wCSDrxVe.png",
    w: 7088,
    h: 1920
  }
};
const portfolioData = {
  "nologystore": {
    image: image7,
    name: "",
    title: "Nology Store",
    subtitle: "App, Website and CMS for Qatar's most loved ecommerce brand",
    description: "Led the development of the Nology Store app, website and CMS from ideation, design, architecture to development. The app is a comprehensive ecommerce platform for Qatar's most loved ecommerce brand. The website is a responsive website for the brand and the CMS is a content management system for the brand. The app is built using Flutter, CMS using Directus, and website using Next.js.",
    images: [image7, nology1, nology2, nology3, nology4, nology5, nology6, nology7, nology8, nology9, nology10, nology11, nology12]
  },
  "employee-productivity-tracking": {
    image: image5,
    name: "",
    title: "Employee Productivity Tracking",
    subtitle: "An app for tracking various activities of warehouse workers to streamline planning, work assignment, and track productivity.",
    description: "The Employee Productivity Tracking app is a comprehensive solution for monitoring and optimizing warehouse operations. The system tracks various activities of warehouse workers including picking, packing, inventory management, and task completion times. Managers can assign work orders, monitor real-time productivity metrics, and generate detailed performance reports. The app helps streamline planning processes, optimize work assignments based on employee skills and availability, and identify areas for improvement. Features include task management, time tracking, performance analytics, and integration with warehouse management systems.",
    images: [ptsScreen1, ptsScreen2, ptsScreen3, ptsScreen4, ptsScreen5, ptsScreen6]
  },
  "shipment-tracker": {
    image: image2,
    name: "",
    title: "Tracker",
    subtitle: "Website to track shipments",
    description: "Tracker is a robust shipment tracking website that provides real-time visibility into package movements across the supply chain. Users can track multiple shipments simultaneously, receive automated updates via email and SMS, and access detailed delivery timelines. The platform integrates with major shipping carriers and offers a clean, user-friendly interface that makes it easy to monitor shipments from dispatch to final delivery. Advanced features include delivery notifications, route optimization insights, and comprehensive shipment history.",
    images: [image2]
  },
  "fifa-command-center": {
    image: image3,
    name: "",
    title: "Command Center",
    subtitle: "Command Center for managing operations during major events",
    description: "The FIFA Command Center is a sophisticated operational management system designed to coordinate and monitor activities during major sporting events. This comprehensive platform provides real-time dashboards for tracking venue operations, security status, transportation logistics, and emergency response coordination. The system enables event organizers to make data-driven decisions, manage resources efficiently, and ensure seamless event execution. Key features include multi-venue monitoring, incident management, resource allocation, and comprehensive reporting capabilities.",
    images: [image3]
  },
  "freight-management-app": {
    image: image4,
    name: "",
    title: "SAP Freight Management App",
    subtitle: "An app for drivers to track their daily activities",
    description: "The SAP Freight Management App is a mobile-first solution designed specifically for drivers to manage and track their daily freight activities. The app provides drivers with easy access to delivery schedules, route information, and real-time updates. Drivers can log their activities, scan barcodes, capture delivery signatures, and update shipment statuses directly from their mobile devices. The application integrates seamlessly with SAP backend systems, ensuring data consistency and providing managers with up-to-date visibility into fleet operations and driver performance.",
    images: [image4, freight1, freight2, freight3]
  },
  "saakin-poc": {
    image: image6,
    name: "",
    title: "Real Estate Platform PoC app",
    subtitle: "A PoC app made using flutter, to find properties for sale and rent",
    description: "A PoC app made using flutter, to find properties for sale and rent",
    images: [image6, saakin1, saakin2, saakin3, saakin4]
  }
};
export {
  attr as a,
  portfolioData as p
};
