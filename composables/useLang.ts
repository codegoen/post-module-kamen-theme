import { useI18n } from "vue-i18n/index";

export const useLang = () => {
  const { t } = useI18n();

  return {
    t,
  };
};
