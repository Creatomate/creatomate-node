import { Shape, ShapeProperties } from './Shape';

export class Rectangle extends Shape {
  constructor(properties: ShapeProperties) {
    super({
      width: '100%',
      height: '100%',
      path: 'M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z',
      ...properties,
    });
  }
}
