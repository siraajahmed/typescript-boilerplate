import { expect } from 'chai';

import { HelloService } from '../helloService';

describe('HelloService tests', () => {
    let service: HelloService;

    beforeEach(() => {
        service = new HelloService();
    });

    describe('get()', () => {
        let result: string;

        beforeEach(() => {
            result = service.helloProp;
        });

        it('should return hello world', () => {
            expect(result).to.equal('Hello World!');
        });
    });
});
