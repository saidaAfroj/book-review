import Images from "./index";

const imageSelect = imageName => {
      if (imageName === null) {
        return Images.logos.other;
      }
      const imageArray = {
        'image1': Images.image1,
        'image2': Images.image2,
        'image3': Images.image3,
        'image4': Images.image4,
        'image5': Images.image5,
        'image6': Images.image6,
        'harry1': Images.harry1,
        'azkaban': Images.azkaban,
        'beautiful': Images.beautiful,
        'before': Images.before,
        'brief': Images.brief,
        'caged': Images.caged,
        'circus': Images.circus,
        'cot': Images.cot,
        'deathly': Images.deathly,
        'deep': Images.deep,
        'fault': Images.fault,
        'freakonomics': Images.freakonomics,
        'goblet': Images.goblet,
        'hiroshima': Images.hiroshima,
        'indian': Images.indian,
        'kind': Images.kind,
        'long': Images.long,
        'rabbit': Images.rabbit,
        'remote': Images.remote,
        'room': Images.room,
        'saints': Images.saints,
        'sapiens': Images.sapiens,
        'silent': Images.silent,
        'simple': Images.simple,
        'sss': Images.sss,
        'storm': Images.storm,
        'teeth': Images.teeth,
        'tell': Images.tell,
        'misery': Images.misery,
        'stuntboy': Images.stuntboy,
        'wicked': Images.wicked,
        'less': Images.less,
        'idiots': Images.idiots,
        'forward': Images.forward,
      };
      return imageArray[imageName];
    };

export default imageSelect;  
