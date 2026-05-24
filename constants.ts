import { Artifact, SocialPost } from './types';

// Images from the prompt
export const IMAGES = {
  hero_bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoAeiSPa8CXD2Neh3UslVh4vUZUpL3r-D_adYQ2ejjZ9Mdh5KtodyJ_pszmunwbv-gM2hTLTj6DzXUMoWZTEUFLV5_1NTmYRj3kGNT9GIC1qHCMOQ3byAXKomucZvoCZCWqGOfN2Wmwh-mo6OgImYYdQ55zE_8khPxTyk9uMC11Cvxljd1GvlXCNxrd7yXGNg7T5NVb-QwH156PlUInXsF6WgHytbntogH7EiborSma4f8vNlFZFy1Q4gQxNrZl19TAS4NyTmjTlAP",
  avatar_libai: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5tdHiCVMycoF5O-Nx1RzEjgwV5Kz3pq7TYYon3LwsHv1ghiMVbvKCeVo0ra1iBnPUrLO2yGcEj_CNrNIqUTQ1QRMlohAFUsmuxGbHFkB0v6LhMnlbHcH_cb3aHZZ-EMF0Ug5tBPhzaDV5ebDZCkA6mydKlxDSLWdumWYvg28vF1DvkGr6o5rPR0WcHudrqRl0pKJlIHaL1G7kkJXW3Bf8qeq0WLEOdVCGrWdfmi7jIillwWrj9BgiKOKhb2W5uWybtpbQ7I4eiBcn",
  vase_blue: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbUIgNa1b8TUtlGONvjEF8J8YvRz7qc-589ho3WDXOmJkX2PEeMVucYqK2RFyu0iyFmX3VdHoeAfF1zYZa9fH8dLd0U4pFQ-zTssacXhMNzc-LhG8coOfAc96DmDpImksFjD_Gw66a4ml8pzW40qzthWXA7HCrk-NCU63pIkpKj74cW6LQauh175GSGmBba1_i5gEhb7_zOigFNunHUSBPabDemVqJBCPPsTDMMSHDLHUxA6gr2N6cSEUXrlb-BR22X7hdq6P6AyTH",
  sword_bronze: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu_CQaIy3BHw_PNRgNs13KLKBkz8TWuS7w7R9twP9eRr1gAmh6ihNTyP1fxBLPF9oIQMRT37y-xgclamvt7wiT80RFYswe_2nmmmSxH3r3vyUq9z1roG1yWnJvJ-GzztA8M6OnXbwWxVJ0tGFfsg_yto88_SLK_rVFG_P7b8hJ1W-1IzjjP2nLiacYnBlcPHP2aGKNh8o5mf2J34XUeCL7AE9U4sFq58zq1UqctUPtGM3zX2vt_eZuz6nnRjw_ehKSfvTdBOg8ZDjH",
  mask_gold: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXgacxVXt1Mo_Q7o8CT8ICaD-CzUqQs_KxH15SmpQzHqN2B5jvcnLJGCg_t7DUu8TG1009A5pPKEwx7OoHoLw2EkqeVVq-fIDeIdgcE-LGLT1KpHul7juk0O9hBkUML84E4GTXTJJHJ3-rmV5H-M7bysgJdQzuuH6AECggAmCio2huhlhDs_69lilFD55uNDbzazVtWUyfL1BPddwpa-kMyNM3p6N68V_vcqIzsF4xgrOE74ZfpRORjLCgjvCicHa1qOwTPa4M2c9Q",
  scroll: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5VpHQPotlSAjf98SEP0Cpycfba2qkQNbDtIZQ-9s5Ut9g6dceQplFy54SJtezRkXF54viPI3_M0gXjB0ndyRQv_QSDgeC8InfwpJX3ImGtHXlg_sljgiX4_o2fGjsoNfGsDtO9ISxqDRGgwhwhAkfljF9ju9U5CB_ml7kf2p5qdxjBRFSEG7v4KLQxhv5QyFbn9EYIDIatNb98aJFtjqAUplr761Mw0jMe-J1I6qnLLC0QtTQTEIOv_mbS4hb46hudGnVAmN8SdDR",
  avatar_user_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCVEfwcUQ3CQah3uvH1OV33yRyO9xvEeUhqeMR7WrWMiVtQTchDLDY8-omHiCN3xBa57O_hsjkS4rh6p9mCRG5OikE5rMzFKKH_ZY27t7BJEz4YEIRHIElqq3PXK5TUpcmxAGqmYzyrm5wvWGKgrRdB8oKec_lvWwW0LV4hGV7KtfmFPel6iFDlIIg0ukkgdJAFYil73nBdw2fxyzb3WSpcy7whC7Z2YZwaAbdZ7zm6nFIkPfGnBI7nUYLSGKsWBSvJksUd8harScU",
  avatar_user_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdcRZRCctJi1SSg8Cri7pYaN-qrj1ld_3B6XPVXbWrdaPdg5H46Rl4BJVgOFk83CMQgcMwsp0d4Tq4DQRHlPEQzerW0DY4SvwpIdc5Figxikyhc0upyDLfZhxqVEF_fPT6M0v7BjlGCh_2cb6nLt1_b6pnxTvC5lky0EG7Vx7XfaAnlM8U-M39BvmjbffVc4jEzxqGm4UgidAaukNlUYwCao_7SS_m4T-pyICo8NJJxGR9tcZdle8kM2ES5gziZJ8rq-SkcfYDs3XD",
  avatar_user_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsl-cuogLbyLdcrKdSIetCJj34moZN1rYAryqIN-nnfrmSZ7OHDNi-ZYcIGlt5KVJu6kftEzs2QJRPeadWSiPIbDUnOzoIazs1_rFv3Y7IgAQIb5R10psJ1ey29U_dzuj8ET-lna8MYz8D_4O-UWkhYZc0mGLQABXvkGBiQVIMPd0NwztbTtiq76J_S6kU4u15aPZxqqBm6HWU_uzlcb6AnEBfyzXeFAxnMwVj2-PwHovvZTsvTB8hFDcI87TOR_HsdX8q27bdlWNh",
  poster_dunhuang: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxUo9cT3aVxFIFZmzZKCAvWn0DYEoxTmJM_5fKKzyofhFFVf8xdKlsL9a6u-VsAdHxYoHoqRHr2N7SU5qcKsL-L-egdDcJQOhCq1Hvoj_rMCE97HOhsRPc653_HzOCGHz4sk-9jykz6IWnGp3_0oHhXKWAmKXw6M9vmGQxMAoKc3D7yf-uUKw1xHgABwVul8kSKq7jXZXH0joIwjFDXLCxFqV9A1JY8r6uaU-Por2Qchcpm0r8cP4Lrshqb6j4kHhfjqXIwj89_suc",
  poster_sanxingdui: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtYkjuzI3FLf9D7vxoPNkeb_M1N0jxI-xGiLrSmfpgdJjWqhRV-37tGRyScN2sALbszsspM-cG_Yd1eQRioA9ec4ThEjnrqsyeZwIGOhT7CkNuogBA94GGNeHDniaZbXF7I6JQn2YcA3DAUYKMZwjhIkP_QtUPPRf1gGzL3SU8SjbsXztD60xjMHzpsVlIPB4w6IMt_82CxONlGeUwe5DVwgGmC9GJYN8kf38acYaMkjA7iE_um-UWqjpQSlveQtbUeMDXLWjVAl5w",
  poster_forbidden: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUbkslOGEujyxSUg2EY-m0vPVuigVn2IMMq8Q2N6fCAcMXHRS2r3tjBRDT9BHkTkeQpSKbLyVfvXei2xH2z45j3_Ac0xdSxdkwNWAnxCYRqECicY2P71cC0PK2WXhC-ciYmblv5EtUoovXpXdohSowTGciChy9Nap-3Fqg1rDj4E6X_8CcT6cxvrFcMfgMdl4ird4ju6bN3rZ_f_4RIBogV2E3ib6xMG_Q18kqFVRbv2g81lwcwrfu-RMlHMmmzyogLj3WrkgXnQ0-",
  poster_qin: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXgacxVXt1Mo_Q7o8CT8ICaD-CzUqQs_KxH15SmpQzHqN2B5jvcnLJGCg_t7DUu8TG1009A5pPKEwx7OoHoLw2EkqeVVq-fIDeIdgcE-LGLT1KpHul7juk0O9hBkUML84E4GTXTJJHJ3-rmV5H-M7bysgJdQzuuH6AECggAmCio2huhlhDs_69lilFD55uNDbzazVtWUyfL1BPddwpa-kMyNM3p6N68V_vcqIzsF4xgrOE74ZfpRORjLCgjvCicHa1qOwTPa4M2c9Q",
  poster_underwater: "https://lh3.googleusercontent.com/aida-public/AB6AXuCokHBFKaUCFH94LKostdxYm211rfP06XjFKp5RYN-tIR-2FxU3X-IZ8avdiOvav271NkB4y8kxE1FPSuefUz8FhD-yy_JzSaG2Ij2aRKty3uo9E_zYsHQni6WTenAapkoYeYGZWqVHV1y9k7ibwX4aplXKaOjgFaIA8qSH4vqiKuRpon6qPGic2tfwWeDG-jHfnRPKROE76sB8_qDOAiyEooxctyJ3tSAGvR3GRET32wOdemcUQeonp61jAve8H8ndtsK9imt-Zo5r",
  poster_porcelain: "https://lh3.googleusercontent.com/aida-public/AB6AXuABMiUeTP6B6X3jny0KWMzVelZn2QgLhHAAPTBEgoMR_GFHELKMyh_mTznNe5AdNPNMapMUicpLv28Q4D0zPT5KpNXd_0eoqXaBOVcjdrJJHGjWSEKkyM7zB4P2eb_11afJpDNw5ewb73K3jXKeBMFe_rx2gryVuW6LfN06QPHZn-8pdSV0XyZZcDJG_9R0UIMdz1-b36ngJnD5hvB_3PvhFjSeK2myC0-jLG3x3Ny9HBF1-t0wg3MSImMZBJw2dQnnyArh1dOCZ89h",
  social_hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB9KDnj2WVvhfOx6NF-6DNeIwjoTTCNmeAuXnuxQ-kihP546GbghxHO4Em76hawCD1JGUR8aUZwZEbkzWk1K7d0fdDBnR_3Q5ej5KV0hnxmQ6YXBxW64RCCx03WRpXNwyet0MmiimWmPWwBzeVX8r1e86-N75Ei1-nFTrI5mnptjPNeU76WYX34SBzdTFvHSbb1eKUiLYq_v5YRjdQENB5G7smpbHFGpRn0meG4hbJsvUsvw3L5nngakcP6xieaHAFKaF8pUsVtTGP",
  item_jade_dragon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_aNGS_aPYPBLBVMO0vGXNk0o5wkkxp2XycO3ScE8OxvZLdq4JoN4uKTBwejn1zvLw1chipswsvnwZ-JKHxDWY9ygIz6QIwcJqz1c84ri2cLnfEV2glOhtUqg6CkdoM5pYkSZwSzl3tw6v5FYXwb229xZ_-qqi9qckf7Kr0Z4vx9yozAJ6QnxnLRTpKqm8EMJNchjMWY2byj_GgyXCSRFYdXYFT_RnbL6m8eT2KpCoUaxO9B7iFTs_2pPBGj7wynrLeK7cB-ka25sp",
  item_kintsugi: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2JqAInweOAIm3jD8YPWkp_5ACRkxP38PLY1CmTxQ2yUEGnTa1WSszBR4_I5Dec2MvxwK7a9pkPhXJXll7wP7EciXkvUWnWfQBGqHsxxDRSY6wAPXnp6867CWGMoYjUiwjP5f4-ZEUTJ4_J-UeX9Nscf-8NLgkAGzd20pgQa0i6OulOWhsBnus2tyt-DszDqXDF7clYUr1DgiZTNOEApi-DEyRUu-N_qQ5sdEaiJtV5TVXnkgY7bcSiKv48WwISRWoW2IA2RIoeztb",
  shop_print: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Rsts49YwO9xqKLoHXixiySyG-CVeaaeRgG7H5C3-aaxgZ1uV6zNVLnoxbDASF4HqRjAej-ot5ytJ1Y4tFiCZGqxeuuGXZbpddCij9ZbwAZauvIVCw_0wfWd0RfvhcevIjY2RwGwbV6l6BrxOGjBYoLZqO8wy0Ez-rXr_0WrGIkUAHtWRFkYJJS9GH0hdj2BzbJFxbFPqOZIzcMzkFPTQmC14p_FPVpJiDANrKNJdGIp0uQF3QifFE63Inb1aqTb8uQOibreg-m7G",
  shop_model: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvnQn-b4Wh40MRx215xCvNXMfEj23xT04LHC-w-uUwjUrcpzOrOXayeP5EjD2JPHl8Y3eWfpMVspxEpOsRRreqVjMAFLjfr0kcIV6q33d5dBY3xISab9M_ULJ9_xej-Qm9oxJZfYTgAlBB8skvrijKT6sxVIDSWuHWWL9Flg1aMkst16_4lX_zkOhvHaJlXCfp1BHZb9SRUQNtsnWnacjc8VgJ0H7qRG595UoetW-1porg3LVitx7Cnit8zev6IQ6ITfk-r57vviOF",
  shop_bag: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdYLD7FUQpqnnjUIHny3JrjygmA0aXVVPMWFQrhmhggZiC-bhew-Nxewl2aqPA0il9Cm67XW0PN_XPqzxTjIKiAGcv0dFr4Ftw6itA71JSXCSd73U4MsTDQIDFNawjaSWXfc-NpXqB4p68FDBFkyVZqaTDoxtzG7usNl7suA-8RifAnB2EVFy79hxz0ktzKTSDGUfbQkCaJAXrHQbZ0UbDBB6peDrBhPM_4qx20Ytnr63T-ktsb_1O5e4S-dt0xY5dA5yOyNK0XVCI",
  impact_village: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfWBxX4_JO8fu10gmCIeoZqbFlVdWQw7URjp8QGkdUC7pSUtO9WPRR_FuvB_2uvDvtHOqIMiKZmVa-1VouL7wuu-QMkD7oqDtOMFJ4RsFuAP1AFio6BnjWEpwOdxC9n0qv1L2pCFtjd9O_BHBNMT7JS30EQ_0w8mvsdzFWQoKOQl1RY_eFuYmKnR6SHp_rtb5LRPvyP6PvQTBBoxxRbkhtwj8YnfaDAgbAKoSVClXuvbfsCn3n_YWetP_poweKtYUL5BlwY_Pm0mmu"
};

export const ARTIFACTS: Artifact[] = [
  {
    id: 'A-742',
    title: '青花缠枝莲纹罐',
    dynasty: '明代 (Ming Dynasty)',
    description: '胎体厚重，青花发色浓艳。通过 AI 修复技术重现破碎文物的完整面貌。',
    image: IMAGES.vase_blue,
    tags: ['3D', 'Restored'],
    material: '高岭土 (Kaolin)',
    restorationLevel: 98.4
  },
  {
    id: 'J-102',
    title: '青铜纪元古剑',
    dynasty: '商代 (Shang Dynasty)',
    description: '出土于丝绸之路遗址。剑身布满精美的饕餮纹。',
    image: IMAGES.sword_bronze,
    tags: ['Featured', 'Warrior Set'],
    material: '青铜 (Bronze)',
    restorationLevel: 85.0
  },
  {
    id: 'M-241',
    title: '古蜀金面具',
    dynasty: '古蜀 (Ancient Shu)',
    description: '三星堆遗址出土，代表了古蜀文明神秘的祭祀文化。',
    image: IMAGES.mask_gold,
    tags: ['Gold', 'Rare'],
    material: '金 (Gold)',
    restorationLevel: 92.0
  },
  {
    id: 'S-881',
    title: '远古卷轴 Alpha',
    dynasty: '唐代 (Tang Dynasty)',
    description: '记录了失传已久的宫廷乐谱。',
    image: IMAGES.scroll,
    tags: ['Document', 'Fragile'],
    material: '宣纸 (Rice Paper)',
    restorationLevel: 45.0
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'p1',
    user: { name: '李明_Architect', avatar: IMAGES.avatar_user_1, title: '建筑复原师' },
    time: '2小时前',
    tag: '模型建议',
    content: '关于前殿东侧的回廊结构，参考了最新的考古勘探报告（2023版），我发现原有的三层斗拱方案可能过于激进。建议调整为两层，并增加更多横向支撑结构。附上对比渲染图。',
    likes: 42,
    comments: 8,
    image: IMAGES.poster_qin,
    projectProgress: 75
  },
  {
    id: 'p2',
    user: { name: '陈曦_History', avatar: IMAGES.avatar_user_2 },
    time: '5小时前',
    tag: '文献分享',
    content: '发现一篇关于秦代宫廷瓦当纹样的稀缺论文，对于复原屋顶细节很有帮助。文件已上传至共建资料库。',
    likes: 15,
    comments: 2
  }
];