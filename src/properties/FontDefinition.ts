export interface FontDefinitionProperties {
  family: string;
  weight?: number;
  style?: string;
}

export class FontDefinition {
  constructor(public properties: FontDefinitionProperties) {}

  toMap(): Record<string, any> {
    return this.properties;
  }
}
