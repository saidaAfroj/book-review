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
      };
      return imageArray[imageName];
    };

export default imageSelect;  