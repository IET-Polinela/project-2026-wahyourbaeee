from rest_framework import permissions

class IsOwnerAndDraftOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.reporter == request.user and obj.status == 'DRAFT'


class IsAdminUpdateStatusOnly(permissions.BasePermission):
    """Admin boleh GET dan PATCH saja, tidak boleh POST/PUT/DELETE"""
    def has_permission(self, request, view):
        # GET diizinkan
        if request.method in permissions.SAFE_METHODS:
            return True
        # Selain GET, hanya partial_update (PATCH) yang boleh
        return view.action == 'partial_update'
    

