import assertRevert from './helpers/assertRevert';

const CWVToken = artifacts.require('CWVToken');
const CWVTokenKeeper = artifacts.require('CWVTokenKeeper');

contract('CWVTokenKeeper', function ([_, owner, otherAccount, funder1, funder2, funder3, funder4]) {
  beforeEach(async function () {
    this.token = await CWVToken.new({ from: owner });
    this.tokenKeeper = await CWVTokenKeeper.new(this.token.address, { from: owner });
  });

  describe('batchTransfer', function () {
    var funders = [funder1, funder2, funder3, funder4];
    var amounts = [1000, 2000, 1000, 6000];

    describe('when the account is not the owner', function () {
      it('revert', async function () {
        await assertRevert(this.tokenKeeper.batchTransfer(funders, amounts, { from: otherAccount }));
      });
    });

    describe('when the keeper has no token', function () {
      it('revert', async function () {
        await assertRevert(this.tokenKeeper.batchTransfer(funders, amounts, { from: owner }));
      });
    });

    describe('when the keeper does not have enough token', function () {
      it('revert', async function () {
        this.token.transfer(this.tokenKeeper.address, 3000, { from: owner });
        await assertRevert(this.tokenKeeper.batchTransfer(funders, amounts, { from: owner }));
      });
    });

    describe('when the funders.length and amounts.length are not the same', function () {
      it('revert', async function () {
        this.token.transfer(this.tokenKeeper.address, 10000, { from: owner });

        var funders2 = [funder1, funder2, funder3, funder4, owner];

        await assertRevert(this.tokenKeeper.batchTransfer(funders2, amounts, { from: owner }));
      });
    });

    describe('when the keeper has enough token', function () {
      it('funders got tokens', async function () {
        this.token.transfer(this.tokenKeeper.address, 10000, { from: owner });
        await this.tokenKeeper.batchTransfer(funders, amounts, { from: owner });

        const f1 = await this.token.balanceOf(funder1);
        assert.equal(f1, 1000);

        const f2 = await this.token.balanceOf(funder2);
        assert.equal(f2, 2000);

        const f3 = await this.token.balanceOf(funder3);
        assert.equal(f3, 1000);

        const f4 = await this.token.balanceOf(funder4);
        assert.equal(f4, 6000);

        const leftToken = await this.token.balanceOf(this.tokenKeeper.address);
        assert.equal(leftToken, 0);
      });
    });
  });
});
