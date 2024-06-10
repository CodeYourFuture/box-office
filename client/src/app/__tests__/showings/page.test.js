import {render, screen} from '@testing-library/react';
import ShowCard from '@/app/components/ShowCard';

describe('ShowCard',() => {
    test("should include the show image, title and click through to the correct booking link",() => {
        // define props
        const showProps = {
            title: 'Mamma Mia!',
            image: 'test-img-url'
        };
        // render ShowCard
        render(<ShowCard title={showProps.title} image={showProps.image} />);

        // check that it renders the title
        screen.getByText('Mamma Mia!');
        // find the element with an img role
        // screen.getByRole('img',{  src: 'test-img-url' })
        // ALTERNATIVE:
        screen.getByAltText('show-poster');

        // TODO: find a link element with text "Book Now"...
    })
})
