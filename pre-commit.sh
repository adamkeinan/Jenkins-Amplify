#!/bin/sh
#
# Via: http://github.com/jwiegley/git-scripts/blob/master/pre-commit.sh
#

if [ ! $(git rev-parse --symbolic-full-name HEAD) = refs/heads/master ]; then
    exit 0
fi

# These are the locations I keep my temporary source and build trees in
TMPDIR=$HOME/code/myproject-pre-commit
MIRROR=$HOME/code/myproject-pre-commit-mirror

# Exit with status 1 if any command below fails
set -e

# Checkout a copy of the current index into MIRROR
git checkout-index --prefix=$MIRROR/ -af

# Remove files from MIRROR which are no longer present in the index
git diff-index --cached --name-only --diff-filter=D -z HEAD | \
    (cd $MIRROR && xargs -0 rm -f --)

# Copy only _changed files_ from MIRROR to TMPDIR, without copying timestamps.
# This includes copying over new files, and deleting removed ones.  This way,
# "make check" will only rebuild what is necessary to validate the commit.
rsync -rlpgoDOc --delete --exclude-from=.git-hooks/excludes $MIRROR/ $TMPDIR/

# Everything else happens in the temporary build tree
cd $TMPDIR

nosetests

exit 0
