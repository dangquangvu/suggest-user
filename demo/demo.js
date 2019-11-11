const axios = require("axios");
const Tank = require("../models/demoSchema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
processF = item => {
    n = item.indexOf("?");
    item = item.substring(0, n);
    let l = item.indexOf("/");
    let l1 = item.indexOf("/", parseInt(l + 3));
    item = item.substring(l1 + 1);
};
demo = async() => {
    let a = [];
    arr = [
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3",
        "https://simthanglong.vn/sim-so-dep-mobifone/1111?&utm_source=Google&utm_medium=Search&utm_campaign=SearchTest&utm_content=SimMangMobi&gclid=CjwKCAjw2qHsBRAGEiwAMbPoDLs4-q1Ugwx1hKqbs0wxY7TBiiX1fcU6K_GoH4f3DRaCxH37rFTOFBoCTNcQAvD_BwE",
        "https://simthanglong.vn/?utm_source=coccoc_context&utm_medium=CPC&utm_campaign=%5BKeywords%5D%20T%E1%BB%AB%20kh%C3%B3a%20ch%C3%ADnh%20Sim%20s%E1%BB%91%20%C4%91%E1%BA%B9p%20%2D%20Sim%20th%C4%83ng%20long&utm_term=sim%20s%C3%B4%20%C4%91%E1%BA%B9p&utm_content=2200924",
        "https://simthanglong.vn/sim-so-dep-vinaphone-p3"
    ];
    console.time("time");
    arr.map(item => {
        n = item.indexOf("?");
        //console.log(n);
        if (n != -1) {
            item = item.substring(0, n);
        }
        let l = item.indexOf("/");
        let l1 = item.indexOf("/", parseInt(l + 3));
        item = item.substring(l1);
        a.push(item);
    });
    console.timeEnd("time");
    // console.log(a);
    // console.log(a);
    //const list = [1, 2, 3, 4, 5];
    // const functionWithPromise = item => {
    //     n = item.indexOf("?");
    //     if (n != -1) {
    //         item = item.substring(0, n);
    //     }
    //     let l = item.indexOf("/");
    //     let l1 = item.indexOf("/", parseInt(l + 3));
    //     item = item.substring(l1 + 1);
    //     return Promise.resolve(item);
    // };
    // const anAsyncFunction = async item => {
    //     return functionWithPromise(item);
    // };

    // const getData = async() => {
    //     return Promise.all(arr.map(item => anAsyncFunction(item)));
    // };
    // console.time("time");
    // getData().then(data => {
    //     //console.log(data);
    //     console.timeEnd("time");
    // });
};
demo();