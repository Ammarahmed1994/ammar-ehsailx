/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Select from "react-select";
import moment from "moment";
import Loader from "react-loader-spinner";
import { getNASAPictures } from "./NasaAPI";
import { PicturesGrid } from "./PicturesGrid/index";
import "./App.css";

const filterOptions = [
  { value: 7, label: "Last week" },
  { value: 14, label: "Last 2 weeks" },
  { value: 30, label: "Last month" },
];

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [pictures, updatePictures] = React.useState(null);
  const [filteredPictures, setFilteredPictures] = React.useState(null);
  const [picturesChange, setPicturesChange] = React.useState(null);

  const [pageChanged, setPageChanged] = React.useState(false);

  const [showButton, setShowButton] = React.useState(false);

  const [pageCount, setPageCount] = React.useState(0);

  let limit = 6;
  let skip = 0;

  useEffect(() => {
    const fetchData = async () => {
      if (!pictures) {
        setIsLoading(true);

        // reduced the range, because the request was timing out most of the time
        const startDate = new Date("2022-01-01T08:28:41.917Z");
        // endDate was errorring between 12:00am and 1:00am, with a message you have to use date between ${some_date_in_1980} and Mar 16, 2022. But It disappeard after 1:00am
        const endDate = new Date();
        const nasaPicturesResponse = await getNASAPictures(startDate, endDate);
        const nasaFilteredPictures = nasaPicturesResponse?.filter(
          (picture) => picture.media_type === `image`
        );
        updatePictures(nasaFilteredPictures);
        setPageCount(Math.ceil(nasaFilteredPictures.length / 6));

        setIsLoading(false);
      }
    };
    fetchData();
  }, [pictures]);

  const handleFilterChange = (selectedOption) => {
    setShowButton(true);
    const today = moment(new Date()).format("YYYY-MM-DD");
    const startDate = moment(new Date())
      .subtract(selectedOption.value, "days")
      .format("YYYY-MM-DD");

    const filtered = [...pictures].filter((item) => {
      let date = moment(new Date(item.date)).format("YYYY-MM-DD");
      return date >= startDate && date < today;
    });

    setFilteredPictures(filtered);
    setPageCount(Math.ceil(filtered.length / limit));
  };

  const clearFilter = () => {
    setFilteredPictures([...pictures]);
    setPageCount([...pictures].length / limit);
    setShowButton(false);
  };

  const changePage = (selectedItem) => {
    skip = selectedItem.selected * limit;

    if (filteredPictures !== null) {
      let picturesOfPagination = filteredPictures.slice(skip, skip + limit);
      setPicturesChange(picturesOfPagination);
    } else {
      let picturesOfPagination = pictures.slice(skip, skip + limit);
      setPicturesChange(picturesOfPagination);
    }
  };

  return (
    <div className="App container">
      {isLoading ? (
       <Loader type="Rings" color="#848484" height={180} width={180} className="loader"/>
      ) : (
        <>
          <div className="row">
            <Select
              options={filterOptions}
              className={`${
                showButton
                  ? "select col-sm-12 col-lg-8"
                  : "select col-sm-12 col-lg-12"
              }`}
              onChange={handleFilterChange}
              placeholder="Filter Nasa pictures.."
            />
            <div
              className={`${
                showButton ? "col-sm-12 col-lg-4" : "col-sm-12 col-lg-0"
              }`}
            >
              <button
                className="clearButton"
                onClick={clearFilter}
                style={{ display: showButton ? `inline` : `none` }}
              >
                Clear filter
              </button>
            </div>
          </div>

          {filteredPictures ? (
            <PicturesGrid
              pictures={filteredPictures}
              skip={skip}
              limit={limit}
              changePage={changePage}
              pageCount={pageCount}
            />
          ) : (
            <PicturesGrid
              pictures={picturesChange || pictures}
              skip={skip}
              limit={limit}
              changePage={changePage}
              pageCount={pageCount}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
