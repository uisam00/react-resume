import { useQuery } from '@tanstack/react-query';

import { publicApi } from '../../../services/http';
import { removeXmlHeader } from '../../../utils/url';

interface Props {
    url: string;
}
const useGetHtmlByUrlQuery = ({ url }: Props) => {
    const { isLoading, isFetching, data, isFetched, refetch } = useQuery({
        queryKey: ['get-html', url],
        queryFn: () => publicApi.get(url),
    });

    return {
        isLoadingHtml: isLoading,
        isFetchingHtml: isFetching,
        html: removeXmlHeader(data?.data),
        isFetchedHtml: isFetched,
        refetchGetHtmlByUrlQuery: refetch,
    };
};

export { useGetHtmlByUrlQuery };
