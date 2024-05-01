import React from 'react';
import { RouteObject } from 'react-router-dom';

export type CustomRouteObject = RouteObject & {
  children?: CustomRouteObject[];
  meta?: {
    title: string;
    icon?: React.ReactNode;
  };
};
