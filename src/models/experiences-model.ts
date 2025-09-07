import en from "@/langs/en.json";
import fa from "@/langs/fa.json";

interface ExperciencesInterFace {
  fromData: string;
  toData: string;
  title: string;
  desc: string;
  cats: Array<string>;
}

export const ExperiencesDataModelEnglish: ExperciencesInterFace[] = [
  {
    fromData: en.experience.model[0].fromData,
    toData: en.experience.model[0].toData,
    title: en.experience.model[0].title,
    desc: en.experience.model[0].desc,
    cats: en.experience.model[0].cats,
  },
  {
    fromData: en.experience.model[0].fromData,
    toData: en.experience.model[0].toData,
    title: en.experience.model[0].title,
    desc: en.experience.model[0].desc,
    cats: en.experience.model[0].cats,
  },
  {
    fromData: en.experience.model[0].fromData,
    toData: en.experience.model[0].toData,
    title: en.experience.model[0].title,
    desc: en.experience.model[0].desc,
    cats: en.experience.model[0].cats,
  },
  {
    fromData: en.experience.model[0].fromData,
    toData: en.experience.model[0].toData,
    title: en.experience.model[0].title,
    desc: en.experience.model[0].desc,
    cats: en.experience.model[0].cats,
  },
];

export const ExperiencesDataModelFarsi: ExperciencesInterFace[] = [
  {
    fromData: fa.experience.model[0].fromData,
    toData: fa.experience.model[0].toData,
    title: fa.experience.model[0].title,
    desc: fa.experience.model[0].desc,
    cats: fa.experience.model[0].cats,
  },
  {
    fromData: fa.experience.model[0].fromData,
    toData: fa.experience.model[0].toData,
    title: fa.experience.model[0].title,
    desc: fa.experience.model[0].desc,
    cats: fa.experience.model[0].cats,
  },
  {
    fromData: fa.experience.model[0].fromData,
    toData: fa.experience.model[0].toData,
    title: fa.experience.model[0].title,
    desc: fa.experience.model[0].desc,
    cats: fa.experience.model[0].cats,
  },
  {
    fromData: fa.experience.model[0].fromData,
    toData: fa.experience.model[0].toData,
    title: fa.experience.model[0].title,
    desc: fa.experience.model[0].desc,
    cats: fa.experience.model[0].cats,
  },
];
