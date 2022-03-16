/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
// import { getNASAPictures } from "./NasaAPI";
import { PicturesGrid } from './PicturesGrid/index';

const mockData = [
  {
    copyright: "Kristine Richer",
    date: "2020-07-02",
    explanation: "The Old Astronomer's Milky Way arcs through this peaceful northern sky. Against faint, diffuse starlight you can follow dark rifts of interstellar dust clouds stretching from the galaxy's core. They lead toward bright star Antares at the right, almost due south above the horizon. The brightest beacon in the twilight is Jupiter, though. From the camera's perspective it seems to hang from the limb of a tree framing the foreground, an apple tree of course. The serene maritime nightscape was recorded in tracked and untracked exposures on June 16 from Dover, Nova Scotia, planet Earth.",
    hdurl: "https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Galaxy, the Planet, and the Apple Tree",
    url: "https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001s1024.jpg"
},
{
  copyright: "Ara Jerahian",
  date: "2020-07-03",
  explanation: "Stars are forming in Lynds Dark Nebula (LDN) 1251. About 1,000 light-years away and drifting above the plane of our Milky Way galaxy, the dusty molecular cloud is part of a complex of dark nebulae mapped toward the Cepheus flare region. Across the spectrum, astronomical explorations of the obscuring interstellar clouds reveal energetic shocks and outflows associated with newborn stars, including the telltale reddish glow from scattered Herbig-Haro objects seen in this sharp image. Distant background galaxies also lurk on the scene, buried behind the dusty expanse. This alluring view imaged with a backyard telescope and broadband filters spans about two full moons on the sky, or 17 light-years at the estimated distance of LDN 1251.",
  hdurl: "https://apod.nasa.gov/apod/image/2007/ldn1251_jerahian.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Lynds Dark Nebula 1251",
  url: "https://apod.nasa.gov/apod/image/2007/ldn1251_jerahian1024.jpg"
},
{
  copyright: "Stephane Vetter",
  date: "2020-07-04",
  explanation: "A sensitive video camera on a summit of the Vosges mountains in France captured these surprising fireworks above a distant horizon on June 26. Generated over intense thunderstorms, this one about 260 kilometers away, the brief and mysterious flashes have come to be known as red sprites. The transient luminous events are caused by electrical breakdown at altitudes of 50 to 100 kilometers. That puts them in the mesophere, the coldest layer of planet Earth's atmosphere. The glow beneath the sprites is from more familiar lighting though, below the storm clouds. But on the right, the video frames have captured another summertime apparition from the mesophere. The silvery veins of light are polar mesospheric clouds. Also known as noctilucent or night shining clouds, the icy clouds still reflect the sunlight when the Sun is below the horizon.",
  hdurl: "https://apod.nasa.gov/apod/image/2007/msv1500crop.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Meeting in the Mesosphere",
  url: "https://apod.nasa.gov/apod/image/2007/msv1000crop.jpg"
},
{
  date: "2020-07-05",
  explanation: "Why would clouds form a hexagon on Saturn? Nobody is sure.   Originally discovered during the Voyager flybys of Saturn in the 1980s, nobody has ever seen anything like it anywhere else in the Solar System.  Acquiring its first sunlit views of far northern Saturn in late 2012, the Cassini spacecraft's wide-angle camera recorded this stunning, false-color image of the ringed planet's north pole. The composite of near-infrared image data results in red hues for low clouds and green for high ones, giving the Saturnian cloudscape a vivid appearance. This and similar images show the stability of the hexagon even 20+ years after Voyager.  Movies of Saturn's North Pole show the cloud structure maintaining its hexagonal structure while rotating.  Unlike individual clouds appearing like a hexagon on Earth, the Saturn cloud pattern appears to have six well defined sides of nearly equal length. Four Earths could fit inside the hexagon. Beyond the cloud tops at the upper right, arcs of the planet's eye-catching rings appear bright blue.",
  hdurl: "https://apod.nasa.gov/apod/image/2007/NorthSaturn_Cassini_1009.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Saturn's Northern Hexagon",
  url: "https://apod.nasa.gov/apod/image/2007/NorthSaturn_Cassini_960.jpg"
},
{
  copyright: "Bryan Goff",
  date: "2020-07-06",
  explanation: "Unspeakable beauty and unimaginable bedlam can be found together in the Orion Nebula Arguably the most famous of all astronomy nebulas, the Great Nebula in Orion is an immense interstellar molecular cloud only 1500 light-years away.  In the featured deep image shown in assigned colors, the part of the nebula's center known as M43 is shown as taken by the Hubble Space Telescope. The Great Nebula in Orion can be found with the unaided eye near the easily identifiable belt of three stars in the popular constellation Orion.  The entire Orion Nebula, including both M42 and M43 spans about 40 light years and is located in the same spiral arm of our Galaxy as the Sun.",
  hdurl: "https://apod.nasa.gov/apod/image/2007/M43_HubbleGoff_4000.jpg",
  media_type: "image",
  service_version: "v1",
  title: "M43: Dust, Gas, and Stars in the Orion Nebula",
  url: "https://apod.nasa.gov/apod/image/2007/M43_HubbleGoff_960.jpg",
},
{
  copyright: "Moophz",
  date: "2020-07-07",
  explanation: "A comet has suddenly become visible to the unaided eye.  Comet C/2020 F3 (NEOWISE) was discovered in late March and brightened as it reached its closest approach to the Sun, inside the orbit of Mercury, late last week. The interplanetary iceberg survived solar heating, so far, and is now becoming closer to the Earth as it starts its long trek back to the outer Solar System. As Comet NEOWISE became one of the few naked-eye comets of the 21st Century, word spread quickly, and the comet has already been photographed behind many famous sites and cities around the globe. Featured, Comet NEOWISE was captured over Lebanon two days ago just before sunrise. The future brightness of Comet NEOWISE remains somewhat uncertain but the comet will likely continue to be findable not only in the early morning sky, but also next week in the early evening sky.    Comet NEOWISE from Around the Globe: Notable Images Submitted to APOD",
  hdurl: "https://apod.nasa.gov/apod/image/2007/Neowise_Moophz_2400.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Comet NEOWISE over Lebanon",
  url: "https://apod.nasa.gov/apod/image/2007/Neowise_Moophz_960.jpg"
}
]

function App() {
  const [pictures, updatePictures] = React.useState(null);

  // useEffect(() => {

  //   // if (!pictures) {
  //     const fetchData = async () => {
  //     // if (!pictures) {
  //     const startDate = new Date("2020-07-01T08:28:41.917Z");
  //     const endDate = new Date();
  //     const nasaPicturesResponse = await getNASAPictures(startDate, endDate);
  //     const nasaFilteredPictures = nasaPicturesResponse?.filter(picture => picture.media_type === `image`);
  //     updatePictures(nasaFilteredPictures)
  //    }
  //   // }
  //   fetchData();
  // }, []);

  useEffect(()=>{
    updatePictures(mockData)
  },[])

  return (
    <div className="App">
      {pictures &&  <PicturesGrid pictures={pictures}/>}
    </div>
  );
}

export default App;
