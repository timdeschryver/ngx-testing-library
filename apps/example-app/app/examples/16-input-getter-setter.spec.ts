import { render, screen } from '@testing-library/angular';
import { InputGetterSetter } from './16-input-getter-setter';

test('should run logic in the input setter and getter', async () => {
  await render(InputGetterSetter, { componentProperties: { value: 'Angular' } });
  const valueControl = screen.getByTestId('value');
  const getterValueControl = screen.getByTestId('value-getter');

  expect(valueControl.textContent).toBe('I am value from setter Angular');
  expect(getterValueControl.textContent).toBe('I am value from getter Angular');
});

test('should run logic in the input setter and getter while re-rendering', async () => {
  const component = await render(InputGetterSetter, { componentProperties: { value: 'Angular' } });
  const valueControl = screen.getByTestId('value');
  const getterValueControl = screen.getByTestId('value-getter');

  expect(valueControl.textContent).toBe('I am value from setter Angular');
  expect(getterValueControl.textContent).toBe('I am value from getter Angular');

  await component.rerender({ value: 'React' });

  expect(valueControl.textContent).toBe('I am value from setter React');
  expect(getterValueControl.textContent).toBe('I am value from getter React');
});
