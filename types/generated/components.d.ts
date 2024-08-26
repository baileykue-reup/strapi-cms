import type { Schema, Attribute } from '@strapi/strapi';

export interface BaseFieldsBaseFields extends Schema.Component {
  collectionName: 'components_base_fields_base_fields';
  info: {
    displayName: 'Base Fields';
  };
  attributes: {
    header: Attribute.String;
    subHeader: Attribute.String;
    primaryAction: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base-fields.base-fields': BaseFieldsBaseFields;
    }
  }
}
