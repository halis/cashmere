
// const R = require('ramda');
// const sharp = require('sharp');

// const getPixel = R.curry((image, start, end) => {
//   const slice = image.slice(start, end);
//   if (slice == null || slice.length < 4) return null;
//   return `${slice.toString('hex')}`;
// });

// let same = 0;
// let different = 0;
// const redPixel = [255, 0, 0, 255];

// sharp('./screenshots/google.new.png')
//   .raw()
//   .toBuffer((err1, newImage, infoNew) => {
//     if (err1) {
//       throw err1;
//     }
//     sharp(newImage, {
//       raw: {
//         width: infoNew.width,
//         height: infoNew.height,
//         channels: infoNew.channels
//       }
//     })
//     .toFile('./screenshots/google.diff.png', (err3, info3) => {
//       if (err3) throw err3;
//       if (info3) console.info(info3);
//     });

//     const getNewPixel = getPixel(newImage);
//     console.info('Processing images, this could take a while...');

//     sharp('./screenshots/google.old.png')
//       .raw()
//       .toBuffer((err2, oldImage) => {
//         if (err2) {

//           throw err2;
//         }
//         const getOldPixel = getPixel(oldImage);

//         let diff = [];
//         let start = 0;
//         let end = 4;
//         let oldPixel;
//         let newPixel;
//         do {
//           oldPixel = getOldPixel(start, end);
//           newPixel = getNewPixel(start, end);

//           if (oldPixel == null || newPixel == null) break;
//           if (oldPixel === newPixel) {
//             same += 1;
//             const value = Array.from(oldImage.slice(start, end));
//             diff.push(value);
//           } else {
//             different += 1;
//             diff.push(redPixel);
//           }
//           start += 4;
//           end += 4;
//         } while (oldPixel && newPixel);

//         sharp(newImage)
//           .toFile('./screenshots/google.diff.png', (err, infoDiff) => {
//             if (err) throw err;
//             if (infoDiff) console.info(infoDiff);
//           });

//         console.info(`${same.toLocaleString()} pixels were the same and ${different.toLocaleString()} pixels were different`);
//       });
//   });
