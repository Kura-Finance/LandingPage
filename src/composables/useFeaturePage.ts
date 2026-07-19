import { getFeaturePageConfig, type FeaturePageSlug } from '~/data/feature-pages'

export function useFeaturePage(slug: FeaturePageSlug) {
  const config = getFeaturePageConfig(slug)

  usePageSeo(config.seo)

  return config
}
