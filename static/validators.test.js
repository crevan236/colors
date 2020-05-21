import { isHexadecimal, showMessage } from './validators';

describe('isHexadecimal', () => {
    test('should be true', () => {
        const color = '#00ff00';

        expect(isHexadecimal(color)).toBe(true);
    });

    test('should be false', () => {
        const color = '#00ff0g';

        expect(isHexadecimal(color)).toBe(false);
    });

    test('should be false', () => {
        const color = '#00ff0';

        expect(isHexadecimal(color)).toBe(false);
    });

    test('should be false', () => {
        const color = '00ff00';

        expect(isHexadecimal(color)).toBe(false);
    });
});

describe('showMessage', () => {
    const element = document.createElement('span');

    test('should set the message', () => {
        const message = 'Some message';
        showMessage(element, message);

        expect(element.innerText).toBe(message);
    });

    test('should clear the message', () => {
        showMessage(element, '');

        expect(element.innerText).toBe('');
    });
});
