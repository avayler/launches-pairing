import React from 'react';
import { render } from '@testing-library/react';
import FormattedText from '../../components/FormattedText';
import { longText } from './__mocks__/FormattedText.mock'

describe('FormattedText', () => {
    it('should render text without truncation when text length is less than or equal to maxLength', () => {
        const { getByText } = render(<FormattedText text="This is some text" />);
        expect(getByText('This is some text')).toBeInTheDocument();
    });

    it('should render truncated text when text length is greater than maxLength', () => {
        const expectedText = 'This is some really long text ...';
        const { getByText } = render(<FormattedText text={longText} />);
        expect(getByText(expectedText)).toBeInTheDocument();
    });

    it('should include full text as title when text is truncated', () => {
        const { getByTitle } = render(<FormattedText text={longText} />);
        expect(getByTitle(longText)).toBeInTheDocument();
    });
});
