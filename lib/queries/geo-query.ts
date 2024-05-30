"use client"

import { useQuery } from "@tanstack/react-query";
import { getGeo } from "@/lib/utils/get-geo";

export const useGeoQuery = () => {
	return useQuery({
		queryKey: ["geo"],
		queryFn: () => getGeo(),
		gcTime: Infinity,
		staleTime: Infinity
	})
}