import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionDescriptions extends Schema.Component {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'Descriptions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface FaqFaqs extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface LegalLegals extends Schema.Component {
  collectionName: 'components_legal_legals';
  info: {
    displayName: 'Legals';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface ListLists extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'Lists';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.descriptions': DescriptionDescriptions;
      'faq.faqs': FaqFaqs;
      'legal.legals': LegalLegals;
      'list.lists': ListLists;
    }
  }
}
