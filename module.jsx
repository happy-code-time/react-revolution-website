import * as React from 'react';

import ReactDOM from 'react-dom';

import { PagerStatic, LoadingBoxTop, uuid } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-pager-static.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ignoreIndexes: []
    };
  }

  remove(index) {
    const { ignoreIndexes } = this.state;

    ignoreIndexes.push(index);

    this.setState({ ignoreIndexes });
  }

  getData() {
    const { ignoreIndexes } = this.state;
    let dataToDisplay = [];

    for (let x = 0; x <= 50; x++) {
      if (!ignoreIndexes.includes(x)) {
        dataToDisplay.push(
          {
            index: x,
            name: `${x}`
          }
        );
      }
    }

    const newStructure = [];

    dataToDisplay.map(object => {
      const { name, index } = object;

      newStructure.push({
        name,
        removeJsx: (
          <i
            title='delete'
            className="fas fa-trash-alt delete"
            onClick={(e) => this.remove(index)}
          >
          </i>
        )
      });
    });


    return newStructure;
  }

  liOnClickCallback(a,b,c){
    console.log(a,b,c);
  }

  render() {
    return (
      <PagerStatic
        globalStyle={true}
        /**
         * data
         */
        data={this.getData()}
        /**
         * How many items display per page
         */
        itemsPerSite={10}
        /**
         * Display total available items
         * passed to the module
         */
        displayTotal={false}
        /**
         * Prefix of the total elements
         */
        totalPrefix=''
        /**
         * Pages Information
         */
        displayPagesInfo={true}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        /**
         * How many sites display: 
         * - before main page
         * - after main page
         */
        prevPages={2}
        nextPages={2}
        /**
         * Display pagination pages
         * if false then only the prev and next buttons are displayed
         */
        displayPaginationPages={true}
        /**
         * Align ul and pagination: 1, 2
         */
        alignPagination={1}
        /**
         * Align pagination items
         * 1, 2, 3, 4, 5
         */
        alignPagesItems={2}
        /**
         * Keys to display from object
         */
        display={
          [
            'name', 'removeJsx'
          ]
        }
        env='prod'
        /**
         * Display loop index as first
         * entry for each li element
         */
        displayCount={true}
        /**
         * Each new page should start with an: 1 
         * or increment the counter for each page
         */
        resetCountOnEachPage={false}
        /**
         * Buttons JSX
         */
        previousButton=''
        nextButton=''
        /**
         * Search input field
         */
        displaySearch={true}
        searchPlaceholder='Search'
        searchIcon=''
        searchSensisitve={false}
        searchOnKeys={
          [
            'name'
          ]
        }
        /**
         * Search value (working only 1 single time)
         */
        searchValue='33'
        /**
         * Filter data on input field change
         */
        searchOnKeyDown={true}
        /**
         * Search title
         */
        searchTitle='search'
        paginationTitle='TITLE'
        /**
         * No data message
         */
        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoadingTime={100}
        fallbackNoData='NO SEARCH LIST'
        fallbackNoDataSearch='NO SEARCH RESULT'
        /**
         * callbacks
         */
        inputOnChangeCallback={undefined}
        liOnClickCallback={this.liOnClickCallback}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));