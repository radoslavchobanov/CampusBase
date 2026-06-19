# VIMS4ALL - Campus Management System
# Copyright (C) 2025-2026 Radoslav Chobanov <rado.chobanov97@gmail.com> and Herbert Wenk <Herbert.Wenk@HGWconsult.de>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/>.

import os
import sys


def main():
    print("VIMS4ALL  Copyright (C) 2025-2026 Radoslav Chobanov and Herbert Wenk")
    print("This program comes with ABSOLUTELY NO WARRANTY.")
    print("This is free software, and you are welcome to redistribute it")
    print("under certain conditions; see LICENSE for details.")
    print()
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "vims.settings.local")
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
