"use client"

import { useCallback, useEffect, useState } from "react"
import type { PaginatedResponse } from "@/lib/api"

type FetchPage<T> = (page: number, pageSize: number) => Promise<PaginatedResponse<T>>

type Options<T> = {
  fetchPage: FetchPage<T>
  initialPage?: number
  initialPageSize?: number
  initialItems?: T[]
  initialTotalPages?: number
  initialTotalItems?: number
}

export function usePaginatedResource<T>({
  fetchPage,
  initialPage = 1,
  initialPageSize = 10,
  initialItems = [],
  initialTotalPages = 1,
  initialTotalItems = 0,
}: Options<T>) {
  const [items, setItems] = useState<T[]>(initialItems)
  const [page, setPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [totalItems, setTotalItems] = useState(initialTotalItems)
  const [loading, setLoading] = useState(initialItems.length === 0)
  const [error, setError] = useState<string | null>(null)
  const [reloadTick, setReloadTick] = useState(0)

  useEffect(() => {
    let cancelled = false
    async function run() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetchPage(page, pageSize)
        if (cancelled) return
        setItems(res.items)
        setTotalPages(res.totalPages)
        setTotalItems(res.totalItems)
      } catch (e: any) {
        if (cancelled) return
        setError(e?.message || "加载失败")
      } finally {
        if (cancelled) return
        setLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [fetchPage, page, pageSize, reloadTick])

  const reload = useCallback(() => setReloadTick((tick) => tick + 1), [])

  return {
    items,
    loading,
    error,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    totalItems,
    reload,
  }
}
