import { getOptionsFromObj } from '@/utils';

export const activeLabels = {
  true: 'Ativo',
  false: 'Inativo',
};

export const activeOptions = getOptionsFromObj(activeLabels);
