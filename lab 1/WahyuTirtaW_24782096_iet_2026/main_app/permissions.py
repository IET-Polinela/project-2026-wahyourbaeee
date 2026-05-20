from rest_framework import permissions

class IsOwnerAndDraftOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Hanya pemilik laporan yang dapat mengedit atau menghapus jika statusnya 'draft'
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.owner == request.user and obj.status == 'draft'
   