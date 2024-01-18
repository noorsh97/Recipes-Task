import { BrowserRouter as Router } from "react-router-dom";
import * as cy from 'cypress/react';
import Card from './index'

describe('<Card />', () => {
  it('renders', () => {
    cy.mount(<Router>
      <Card
        id={0}
        title={'title'}
        image={'error_image_load_placeholder.jpg'}
        imageType={'jpg'}
        isGuestFavorite={false}
      />
    </Router>)
  })
})