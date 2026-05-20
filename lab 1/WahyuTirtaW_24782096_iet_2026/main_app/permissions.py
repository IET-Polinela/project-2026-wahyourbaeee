from rest_framework import permissions

class IsOwnerAndDraftOnly(permissions.BasePermission):
    """
    Custom permission untuk memastikan hanya pemilik laporan yang bisa edit/delete,
    dan itu pun HANYA JIKA status laporan masih 'DRAFT'.
    """

    def has_permission(self, request, view):
        # Memastikan user sudah terautentikasi (login)
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        # Pengecekan untuk aksi modifikasi (PUT, PATCH, DELETE)
        if request.method in ['PUT', 'PATCH', 'DELETE']:
            # Wajib pemilik laporan DAN statusnya harus 'DRAFT'
            return obj.reporter == request.user and obj.status == 'DRAFT'
        
        # Untuk GET (Detail), izinkan kalau user sudah login (lolos dari has_permission)
        return True