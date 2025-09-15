import { useAuth } from "@/context/authContext";
import React from "react";
import { Text } from "react-native";

export const AdminOnly: React.FC<React.PropsWithChildren<{ fallback?: React.ReactNode }>> =
({ children, fallback }) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <Text>Loading…</Text>;
  if (!isAdmin) return <>{fallback ?? <Text>Admins only</Text>}</>;
  return <>{children}</>;
};
