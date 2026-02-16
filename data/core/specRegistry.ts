// Specification registry

import type { SubjectSpecification } from "../types/subjectSpecification";

// ===============================
// GCSE • AQA
// ===============================

// ===============================
// Art (Routes)
// ===============================

import { specification as artCraftAndDesign } from "../specs/gcse/aqa/art-and-design/art-and-design-art-craft-and-design";
import { specification as fineArt } from "../specs/gcse/aqa/art-and-design/art-and-design-fine-art";
import { specification as graphicCommunication } from "../specs/gcse/aqa/art-and-design/art-and-design-graphic-communication";
import { specification as photography } from "../specs/gcse/aqa/art-and-design/art-and-design-photography";
import { specification as textileDesign } from "../specs/gcse/aqa/art-and-design/art-and-design-textile-design";
import { specification as threeDimensionalDesign } from "../specs/gcse/aqa/art-and-design/art-and-design-three-dimensional-design";

// ===============================
// Tiered Languages
// ===============================

import { specification as bengaliFoundation } from "../specs/gcse/aqa/bengali/bengali-foundation";
import { specification as bengaliHigher } from "../specs/gcse/aqa/bengali/bengali-higher";

import { specification as chineseMandarinFoundation } from "../specs/gcse/aqa/chinese-mandarin/chinese-mandarin-foundation";
import { specification as chineseMandarinHigher } from "../specs/gcse/aqa/chinese-mandarin/chinese-mandarin-higher";

import { specification as frenchFoundation } from "../specs/gcse/aqa/french/french-foundation";
import { specification as frenchHigher } from "../specs/gcse/aqa/french/french-higher";

import { specification as germanFoundation } from "../specs/gcse/aqa/german/german-foundation";
import { specification as germanHigher } from "../specs/gcse/aqa/german/german-higher";

import { specification as hebrewModernFoundation } from "../specs/gcse/aqa/hebrew-modern/hebrew-modern-foundation";
import { specification as hebrewModernHigher } from "../specs/gcse/aqa/hebrew-modern/hebrew-modern-higher";

import { specification as italianFoundation } from "../specs/gcse/aqa/italian/italian-foundation";
import { specification as italianHigher } from "../specs/gcse/aqa/italian/italian-higher";

import { specification as panjabiFoundation } from "../specs/gcse/aqa/panjabi/panjabi-foundation";
import { specification as panjabiHigher } from "../specs/gcse/aqa/panjabi/panjabi-higher";

import { specification as polishFoundation } from "../specs/gcse/aqa/polish/polish-foundation";
import { specification as polishHigher } from "../specs/gcse/aqa/polish/polish-higher";

import { specification as spanishFoundation } from "../specs/gcse/aqa/spanish/spanish-foundation";
import { specification as spanishHigher } from "../specs/gcse/aqa/spanish/spanish-higher";

import { specification as urduFoundation } from "../specs/gcse/aqa/urdu/urdu-foundation";
import { specification as urduHigher } from "../specs/gcse/aqa/urdu/urdu-higher";

// ===============================
// Tiered Sciences
// ===============================

import { specification as biologyFoundation } from "../specs/gcse/aqa/biology/biology-foundation";
import { specification as biologyHigher } from "../specs/gcse/aqa/biology/biology-higher";

import { specification as chemistryFoundation } from "../specs/gcse/aqa/chemistry/chemistry-foundation";
import { specification as chemistryHigher } from "../specs/gcse/aqa/chemistry/chemistry-higher";

import { specification as physicsFoundation } from "../specs/gcse/aqa/physics/physics-foundation";
import { specification as physicsHigher } from "../specs/gcse/aqa/physics/physics-higher";

import { specification as combinedScienceFoundation } from "../specs/gcse/aqa/combined-science-trilogy/combined-science-trilogy-foundation";
import { specification as combinedScienceHigher } from "../specs/gcse/aqa/combined-science-trilogy/combined-science-trilogy-higher";

// ===============================
// Tiered Core Subjects
// ===============================

import { specification as mathsFoundation } from "../specs/gcse/aqa/mathematics/mathematics-foundation";
import { specification as mathsHigher } from "../specs/gcse/aqa/mathematics/mathematics-higher";

// ===============================
// Non-Tiered Core Subjects
// ===============================

import { specification as business } from "../specs/gcse/aqa/business/business";
import { specification as computerScience } from "../specs/gcse/aqa/computer-science/computer-science";
import { specification as citizenshipStudies } from "../specs/gcse/aqa/citizenship-studies/citizenship-studies";
import { specification as dance } from "../specs/gcse/aqa/dance/dance";
import { specification as designAndTechnology } from "../specs/gcse/aqa/design-and-technology/design-and-technology";
import { specification as drama } from "../specs/gcse/aqa/drama/drama";
import { specification as economics } from "../specs/gcse/aqa/economics/economics";
import { specification as engineering } from "../specs/gcse/aqa/engineering/engineering";
import { specification as englishLanguage } from "../specs/gcse/aqa/english-language/english-language";
import { specification as englishLiterature } from "../specs/gcse/aqa/english-literature/english-literature";
import { specification as foodPreparationAndNutrition } from "../specs/gcse/aqa/food-preparation-and-nutrition/food-preparation-and-nutrition";
import { specification as music } from "../specs/gcse/aqa/music/music";
import { specification as physicalEducation } from "../specs/gcse/aqa/physical-education/physical-education";
import { specification as psychology } from "../specs/gcse/aqa/psychology/psychology";

// ===============================
// Religious Studies (Routes)
// ===============================

import { specification as religiousStudiesRouteA } from "../specs/gcse/aqa/religious-studies/religious-studies-route-a";
import { specification as religiousStudiesRouteB } from "../specs/gcse/aqa/religious-studies/religious-studies-route-b";
import { specification as religiousStudiesShortCourse } from "../specs/gcse/aqa/religious-studies/religious-studies-short-course";

export const specificationRegistry: Record<string, SubjectSpecification> = {

  // Art
  "gcse/aqa/art-and-design/art-craft-and-design": artCraftAndDesign,
  "gcse/aqa/art-and-design/fine-art": fineArt,
  "gcse/aqa/art-and-design/graphic-communication": graphicCommunication,
  "gcse/aqa/art-and-design/photography": photography,
  "gcse/aqa/art-and-design/textile-design": textileDesign,
  "gcse/aqa/art-and-design/three-dimensional-design": threeDimensionalDesign,

  // Languages
  "gcse/aqa/bengali/foundation": bengaliFoundation,
  "gcse/aqa/bengali/higher": bengaliHigher,
  "gcse/aqa/chinese-mandarin/foundation": chineseMandarinFoundation,
  "gcse/aqa/chinese-mandarin/higher": chineseMandarinHigher,
  "gcse/aqa/french/foundation": frenchFoundation,
  "gcse/aqa/french/higher": frenchHigher,
  "gcse/aqa/german/foundation": germanFoundation,
  "gcse/aqa/german/higher": germanHigher,
  "gcse/aqa/hebrew-modern/foundation": hebrewModernFoundation,
  "gcse/aqa/hebrew-modern/higher": hebrewModernHigher,
  "gcse/aqa/italian/foundation": italianFoundation,
  "gcse/aqa/italian/higher": italianHigher,
  "gcse/aqa/panjabi/foundation": panjabiFoundation,
  "gcse/aqa/panjabi/higher": panjabiHigher,
  "gcse/aqa/polish/foundation": polishFoundation,
  "gcse/aqa/polish/higher": polishHigher,
  "gcse/aqa/spanish/foundation": spanishFoundation,
  "gcse/aqa/spanish/higher": spanishHigher,
  "gcse/aqa/urdu/foundation": urduFoundation,
  "gcse/aqa/urdu/higher": urduHigher,

  // Sciences
  "gcse/aqa/biology/foundation": biologyFoundation,
  "gcse/aqa/biology/higher": biologyHigher,
  "gcse/aqa/chemistry/foundation": chemistryFoundation,
  "gcse/aqa/chemistry/higher": chemistryHigher,
  "gcse/aqa/physics/foundation": physicsFoundation,
  "gcse/aqa/physics/higher": physicsHigher,
  "gcse/aqa/combined-science-trilogy/foundation": combinedScienceFoundation,
  "gcse/aqa/combined-science-trilogy/higher": combinedScienceHigher,

  // Mathematics (Tiered Core)
  "gcse/aqa/mathematics/foundation": mathsFoundation,
  "gcse/aqa/mathematics/higher": mathsHigher,

  // Non-tiered Core
  "gcse/aqa/business": business,
  "gcse/aqa/computer-science": computerScience,
  "gcse/aqa/citizenship-studies": citizenshipStudies,
  "gcse/aqa/dance": dance,
  "gcse/aqa/design-and-technology": designAndTechnology,
  "gcse/aqa/drama": drama,
  "gcse/aqa/economics": economics,
  "gcse/aqa/engineering": engineering,
  "gcse/aqa/english-language": englishLanguage,
  "gcse/aqa/english-literature": englishLiterature,
  "gcse/aqa/food-preparation-and-nutrition": foodPreparationAndNutrition,
  "gcse/aqa/music": music,
  "gcse/aqa/physical-education": physicalEducation,
  "gcse/aqa/psychology": psychology,

  // Religious Studies
  "gcse/aqa/religious-studies/route-a": religiousStudiesRouteA,
  "gcse/aqa/religious-studies/route-b": religiousStudiesRouteB,
  "gcse/aqa/religious-studies/short-course": religiousStudiesShortCourse,
};
