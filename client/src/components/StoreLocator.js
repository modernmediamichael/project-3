import React from 'react'
import { Map } from 'react-store-locator'

class StoreLocator extends React.Component{
    render(){
        const locations = [
          {
          id: 1,
          lat: 25.774780,
          lng: -80.139977,
          show: false,
          name: 'Best Buy'
        },
        {
          id: 2,
          lat: 25.774660,
          lng: -80.190224,
          show: true,
          name: 'Electronic Avenue Boutique'
        },
        {
          id: 3,
          lat: 25.778040,
          lng: -80.186295,
          show: true,
          name: 'Electronic World'
        }
        ]
        return(
          <Map height={'50vh'} width={'100%'} mapOptions={{}} locations={locations} googleApiKey={'AIzaSyBL38ZAeW8F4L-nEp4CHfvDHqCdCIfHXQc'}/> // Pass google maps api key through here
        )
      }
}

export default StoreLocator