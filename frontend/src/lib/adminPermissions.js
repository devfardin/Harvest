// Admin permissions configuration
// This file defines all available admin permissions and roles
// You can edit this to add/remove permissions as needed

/**
 * PERMISSION LEVELS:
 * - 1: View only (can see data but cannot make changes)
 * - 2: Edit (can modify existing data)
 * - 3: Delete (can remove data)
 * - 4: Admin (full access including managing other admins)
 */

export const PERMISSIONS = {
  // User management permissions
  USER_VIEW: { level: 1, label: 'View Users', description: 'Can view user list and basic information' },
  USER_EDIT: { level: 2, label: 'Edit Users', description: 'Can edit user profiles and settings' },
  USER_DELETE: { level: 3, label: 'Delete Users', description: 'Can delete user accounts' },
  USER_MANAGE: { level: 4, label: 'Manage Users', description: 'Full user management including permissions' },
  
  // Product management permissions
  PRODUCT_VIEW: { level: 1, label: 'View Products', description: 'Can view product catalog' },
  PRODUCT_EDIT: { level: 2, label: 'Edit Products', description: 'Can modify product details' },
  PRODUCT_CREATE: { level: 2, label: 'Create Products', description: 'Can add new products' },
  PRODUCT_DELETE: { level: 3, label: 'Delete Products', description: 'Can remove products' },
  PRODUCT_MANAGE: { level: 4, label: 'Manage Products', description: 'Full product management' },
  
  // Transaction permissions
  TRANSACTION_VIEW: { level: 1, label: 'View Transactions', description: 'Can view transaction history' },
  TRANSACTION_APPROVE: { level: 2, label: 'Approve Transactions', description: 'Can approve/reject transactions' },
  TRANSACTION_MANAGE: { level: 4, label: 'Manage Transactions', description: 'Full transaction management' },
  
  // Report permissions
  REPORT_VIEW: { level: 1, label: 'View Reports', description: 'Can view platform reports and analytics' },
  REPORT_EXPORT: { level: 2, label: 'Export Reports', description: 'Can export reports to CSV/PDF' },
  
  // Settings permissions
  SETTINGS_VIEW: { level: 1, label: 'View Settings', description: 'Can view system settings' },
  SETTINGS_EDIT: { level: 4, label: 'Edit Settings', description: 'Can modify system configuration' },
  
  // Dashboard permissions
  DASHBOARD_VIEW: { level: 1, label: 'View Dashboard', description: 'Can view admin dashboard' },
};

/**
 * ADMIN ROLES
 * Define roles with their permission levels
 * You can create custom roles by adding to this object
 */
export const ROLES = {
  SUPER_ADMIN: {
    name: 'Super Admin',
    description: 'Full system access - can do everything',
    permissions: Object.keys(PERMISSIONS),
    color: 'text-red-700 bg-red-50 border-red-200',
  },
  
  ADMIN: {
    name: 'Admin',
    description: 'Full access to manage users, products, and transactions',
    permissions: [
      'USER_VIEW', 'USER_EDIT', 'USER_DELETE',
      'PRODUCT_VIEW', 'PRODUCT_EDIT', 'PRODUCT_CREATE', 'PRODUCT_DELETE',
      'TRANSACTION_VIEW', 'TRANSACTION_APPROVE',
      'REPORT_VIEW', 'REPORT_EXPORT',
      'SETTINGS_VIEW', 'SETTINGS_EDIT',
      'DASHBOARD_VIEW',
    ],
    color: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  
  MODERATOR: {
    name: 'Moderator',
    description: 'Can view and approve transactions, view users',
    permissions: [
      'USER_VIEW',
      'TRANSACTION_VIEW', 'TRANSACTION_APPROVE',
      'REPORT_VIEW',
      'DASHBOARD_VIEW',
    ],
    color: 'text-green-700 bg-green-50 border-green-200',
  },
  
  VIEWER: {
    name: 'Viewer',
    description: 'Read-only access to dashboard and reports',
    permissions: [
      'DASHBOARD_VIEW',
      'REPORT_VIEW',
    ],
    color: 'text-gray-700 bg-gray-50 border-gray-200',
  },
};

/**
 * Check if a user has a specific permission
 * @param {string[]} userPermissions - Array of permission keys the user has
 * @param {string} requiredPermission - The permission to check
 * @returns {boolean} - True if user has the permission
 */
export function hasPermission(userPermissions, requiredPermission) {
  if (!userPermissions || !Array.isArray(userPermissions)) return false;
  return userPermissions.includes(requiredPermission);
}

/**
 * Check if a user has ANY of the required permissions
 * @param {string[]} userPermissions - Array of permission keys the user has
 * @param {string[]} requiredPermissions - Array of permissions to check
 * @returns {boolean} - True if user has at least one permission
 */
export function hasAnyPermission(userPermissions, requiredPermissions) {
  if (!userPermissions || !Array.isArray(userPermissions)) return false;
  return requiredPermissions.some(perm => userPermissions.includes(perm));
}

/**
 * Check if a user has ALL required permissions
 * @param {string[]} userPermissions - Array of permission keys the user has
 * @param {string[]} requiredPermissions - Array of permissions to check
 * @returns {boolean} - True if user has all permissions
 */
export function hasAllPermissions(userPermissions, requiredPermissions) {
  if (!userPermissions || !Array.isArray(userPermissions)) return false;
  return requiredPermissions.every(perm => userPermissions.includes(perm));
}
